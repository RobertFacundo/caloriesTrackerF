import useHomeStats from "../hooks/useHomeStats";
import { InformationBox } from "./InformationBox";
import { StatsContainer, StatsLeft, StatsRight, ToggleSwitch } from '../styled/components/HomeStatsStyled'
import Loader from "./Loader";


const HomeStats = () => {
    const { loading, error, dailyNutrition, calorieDeficit, dailyCalories, trainingDay, toggleTrainingDay, updating } = useHomeStats();

    if (loading) return <Loader />
    if (error) return <p>Error....</p>

    return (
        <StatsContainer>
            <StatsLeft>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
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
                {dailyNutrition ? (
                    <div>
                        <p>🔥 Max daily intake: <strong>{dailyCalories}</strong> kcal</p>
                        <p>🍽️ You've consumed: <strong>{dailyNutrition.calories}</strong> kcal</p>
                        <p>⚖️ Current deficit: <strong>{calorieDeficit}</strong> kcal</p>
                    </div>
                ) : (
                    <p>No daily log data     is available</p>
                )}
            </StatsLeft>
            <StatsRight>
                <InformationBox dailyCalories={dailyCalories} />
            </StatsRight>
        </StatsContainer>
    )
}

export default HomeStats;