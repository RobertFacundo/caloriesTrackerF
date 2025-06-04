import useHomeStats from "../hooks/useHomeStats";
import { InformationBox } from "./InformationBox";


const HomeStats = () => {
    const { loading, error, dailyNutrition, calorieDeficit, dailyCalories, trainingDay, toggleTrainingDay, updating } = useHomeStats();

    if (loading) return <p>Loading</p>
    if (error) return <p>Error....</p>

    return (
        <div >
            <div>
                <h2>home stats</h2>
                <label >
                    <input type="checkbox" checked={trainingDay} onChange={toggleTrainingDay} disabled={updating} />
                    Today is a training day?
                </label>
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
            <div>
                <InformationBox dailyCalories={dailyCalories}/>
            </div>
        </div>
    )
}

export default HomeStats;