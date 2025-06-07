import React, { useState } from "react";
import { useProfileStats } from "../hooks/useStats";
import { Bar } from "react-chartjs-2";
import { useTheme } from "styled-components";
import {Container, ButtonGroup, RangeButton,TotalsContainer, ChartWrapper} from '../styled/components/ProfileStats'
import Loader from "./Loader";

const ProfileStats = () => {
    const [range, setRange] = useState('weekly');
    const { data, deficitTotal, totalCalories, totalGoal, loading, error } = useProfileStats(range);

    const theme = useTheme();

    const sortedData = [...data].sort((a, b)=> new Date(a.date) - new Date(b.date));


    if (loading) return <Loader/>
    if (error) return <p>!Error loading stats!: {error}</p>
    if (!data) return null;

    const chartData = {
        labels: sortedData.map((day) => day.date),
        datasets: [
            {
                label: 'Calories Consumed',
                data: data.map((day) => day.caloriesConsumed),
                backgroundColor: theme.primary,
                yAxisID: 'y',
                maxBarThickness: 30,
            },
            {
                label: "Calories Goal",
                data: data.map((day) => day.caloriesGoal),
                backgroundColor: theme.surface,
                yAxisID: 'y',
                maxBarThickness: 30,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        onHover: (event, chartElement) => {
            const target = event.native ? event.native.target : event.target;
            if (chartElement.length) {
                target.style.cursor = 'pointer';
            } else {
                target.style.cursor = 'default';
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const index = context.dataIndex;
                        const datasetLabel = context.dataset.label;
                        const day = data[index];

                        if (datasetLabel === 'Calories Goal') {
                            return [
                                `Goal: ${day.caloriesGoal}`,
                                `Deficit: ${day.deficit}`,
                                day.weight ? `Weight: ${day.weight}kg` : "No weigth data",
                            ];
                        } else if (datasetLabel === 'Calories Consumed') {
                            return [
                                `Consumed: ${day.caloriesConsumed}`,
                                `Deficit: ${day.deficit}`,
                                day.weight ? `Weight: ${day.weight}kg` : "No weight data",
                            ];
                        }
                        return '';
                    },
                },
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: theme.text, // 👉 Cambia color de las leyendas
                    font: {
                        size: 14,
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: theme.text,
                },
                title: {
                    display: true,
                    text: "Date",
                    color: theme.text, // 👉 Color del título del eje X
                    font: {
                        size: 16,
                    },
                },
            },
            y: {
                ticks: {
                    color: theme.text, // 👉 Color de los valores del eje Y
                },
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Calories",
                    color: theme.text,
                    font: {
                        size: 16,
                    },
                },
                position: 'left',
            },
        },
    };

    return (
        <Container className="profile-stats">
            <ButtonGroup>
                <RangeButton onClick={() => setRange('weekly')}>Weekly</RangeButton>
                <RangeButton onClick={() => setRange('monthly')}>Monthly</RangeButton>
                <RangeButton onClick={() => setRange('annually')}>Annually</RangeButton>
            </ButtonGroup>
            <ChartWrapper>
                <Bar data={chartData} options={chartOptions} />
            </ChartWrapper>
            <TotalsContainer>
                <p><strong>Total Calories Consumed:</strong><span> {totalCalories}</span></p>
                <p><strong>Total Calories Allowed:</strong> <span>{totalGoal}</span></p>
                <p><strong>Total Caloric Deficit:</strong> <span>{deficitTotal}</span></p>
            </TotalsContainer>
        </Container>
    );
};

export default ProfileStats;