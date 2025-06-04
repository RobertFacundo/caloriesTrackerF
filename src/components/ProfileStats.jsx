import React, { useState } from "react";
import { useProfileStats } from "../hooks/useStats";
import { Bar } from "react-chartjs-2";

const ProfileStats = () => {
    const [range, setRange] = useState('weekly');
    const { data, deficitTotal, totalCalories, totalGoal, loading, error } = useProfileStats(range);


    if (loading) return <p>Loading stats...</p>
    if (error) return <p>Error loading stats: {error}</p>
    if (!data) return null;

    const chartData = {
        labels: data.map((day) => day.date),
        datasets: [
            {
                label: 'Calories Consumed',
                data: data.map((day) => day.caloriesConsumed),
                backgroundColor: "#FF6384",
                yAxisID: 'y',
                barThickness: 30,
            },
            {
                label: "Calories Goal",
                data: data.map((day) => day.caloriesGoal),
                backgroundColor: "#36A2EB",
                yAxisID: 'y',
                barThickness: 30,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const index = context.dataIndex;
                        const datasetLabel = context.dataset.label;
                        const day = data[index];

                        if(datasetLabel === 'Calories Goal'){
                            return[
                                `Goal: ${day.caloriesGoal}`,
                                `Deficit: ${day.deficit}`,
                                day.weight ? `Weight: ${day.weight}kg`: "No weigth data",
                            ];
                        }else if(datasetLabel === 'Calories Consumed'){
                            return [
                                `Consumed: ${day.caloriesConsumed}`,
                                `Deficit: ${day.deficit}`,
                                day.weight ? `Weight: ${day.weight}kg`: "No weight data",
                            ];
                        }
                        return '';
                    },
                },
            },
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Date",
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Calories",
                },
                position: 'left',
            },
        },
    };

    return (
        <div>
            <div>
                <button onClick={() => setRange('weekly')}>Weekly</button>
                <button onClick={() => setRange('monthly')}>    Monthly</button>
                <button onClick={() => setRange('annually')}>Annually</button>
            </div>
            <div>
                <Bar data={chartData} options={chartOptions} />
            </div>
            <div>
                <p><strong>Total Calories Consumed:</strong> {totalCalories}</p>
                <p><strong>Total Calories Allowed:</strong> {totalGoal}</p>
                <p><strong>Total Caloric Deficit:</strong> {deficitTotal}</p>
            </div>
        </div>
    );
};

export default ProfileStats;