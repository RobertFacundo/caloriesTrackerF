import React, { useState } from "react";
import { useProfileStats } from "../hooks/useStats";
import { Bar } from "react-chartjs-2";
import { useTheme } from "styled-components";
import { Container, ButtonGroup, RangeButton, TotalsContainer, ChartWrapper } from '../styled/components/ProfileStats'
import Loader from "./Loader";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    BarElement,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from 'chart.js';


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    Tooltip,
    Legend
);

const ProfileStats = () => {
    const [range, setRange] = useState('weekly');
    const { data, deficitTotal, totalCalories, totalGoal, loading, error } = useProfileStats(range);

    const theme = useTheme();

    const sortedData = Array.isArray(data) ? [...data].sort((a, b) => new Date(a.date) - new Date(b.date)) : [];


    if (loading) return <Loader />
    if (error) return <p>!Error loading stats!: {error}</p>
    if (!Array.isArray(data) || data.length === 0) return <p>No stats available.</p>

    const chartData = {
        labels: sortedData.map((day) =>
            new Date(day.date).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
            })
        ),
        datasets: [
            {
                label: 'Calories Consumed',
                data: sortedData.map((day) => day.caloriesConsumed),
                backgroundColor: theme.primary,
                yAxisID: 'y',
                maxBarThickness: 30,
            },
            {
                label: "Calories Goal",
                data: sortedData.map((day) => day.caloriesGoal),
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
            target.style.cursor = chartElement.length ? "pointer" : "default";
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const index = context.dataIndex;
                        const day = sortedData[index];
                        const isGoal = context.dataset.label === "Calories Goal";
                        return [
                            isGoal ? `Goal: ${day.caloriesGoal}` : `Consumed: ${day.caloriesConsumed}`,
                            `Deficit: ${day.deficit}`,
                            day.weight ? `Weight: ${day.weight}kg` : "No weight data",
                        ];
                    },
                },
            },
            legend: {
                display: true,
                position: "top",
                labels: {
                    color: theme.text,
                    font: { size: 14 },
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
                <RangeButton active={range === 'weekly'} onClick={() => setRange('weekly')}>
                    Weekly
                </RangeButton>
                <RangeButton active={range === 'monthly'} onClick={() => setRange('monthly')}>
                    Monthly
                </RangeButton>
                <RangeButton active={range === 'annually'} onClick={() => setRange('annually')}>
                    Annually
                </RangeButton>
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