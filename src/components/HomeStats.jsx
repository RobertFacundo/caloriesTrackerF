import React from "react";
import useHomeStats from "../hooks/useHomeStats";


const HomeStats = () => {
    const { loading, error, dailyNutrition, calorieDeficit, dailyCalories } = useHomeStats();

    if (loading) return <p>Loading</p>
    if (error) return <p>Error....</p>

    return (
        <div>
            <h2>home stats</h2>
            {dailyNutrition ? (
                <div>
                    <p>Your maximun daily calorie intake is <strong>{dailyCalories}</strong>kcal.</p>
                    <p>So far, you've consumed <strong>{dailyNutrition.calories}</strong>kcal</p>
                    <p>Your Current deficit is <strong>{calorieDeficit}</strong>kcal</p>
                </div>
            ) : (
                <p>No daily log data is available</p>
            )}
        </div>
    )
}

export default HomeStats;