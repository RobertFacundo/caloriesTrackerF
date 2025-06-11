import React from "react";
import useHomeStats from "../hooks/useHomeStats";
import { InformationBox } from "./InformationBox";
import { StatsContainer, StatsLeft, StatsRight, ToggleSwitch } from '../styled/components/HomeStatsStyled'
import Loader from "./Loader";


const TrainingDayToggle = React.memo(({ trainingDay, toggleTrainingDay, updating }) => {
    return (
        <div style={{ display: "flex", gap: "0.75rem" }} data-testid='toggleText'>
            {trainingDay ? "🏋️ Today is a training day!" : "💪 Today is a training day?"}
            <ToggleSwitch>
                <input
                    type="checkbox"
                    checked={trainingDay}
                    onChange={toggleTrainingDay}
                    disabled={updating}
                />
                <span />
            </ToggleSwitch>
        </div>
    );
});


const HomeStats = React.memo(() => {
    const { loading, error, dailyNutrition, calorieDeficit, dailyCalories, trainingDay, toggleTrainingDay, updating } = useHomeStats();

    if (loading) return <Loader />
    if (error) return <p>Error....</p>

    return (
        <StatsContainer>
            <StatsLeft>
                <TrainingDayToggle trainingDay={trainingDay} toggleTrainingDay={toggleTrainingDay} updating={updating} />
                <div className="home-stats">
                    <p>🔥 Max daily intake: <strong>{dailyCalories || 0}</strong> kcal</p>
                    <p>🍽️ You've consumed: <strong>{dailyNutrition?.calories || 0}</strong> kcal</p>
                    <p>⚖️ Current deficit: <strong>
                        {(calorieDeficit || 0) > 0
                            ? `${calorieDeficit}`
                            : `No deficit (surplus of ${Math.abs(calorieDeficit || 0)})`}
                    </strong> kcal</p>
                </div>
            </StatsLeft>
            <StatsRight>
                <InformationBox dailyCalories={dailyCalories} />
            </StatsRight>
        </StatsContainer>
    )
});

export default HomeStats;