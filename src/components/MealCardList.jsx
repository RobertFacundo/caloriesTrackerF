import React from "react";
import { useMealCardList } from "../hooks/useMealCardlList";
import { useDailyLog } from "../contexts/DailyLogContext";
import MealCard from "./MealCard";

const MealCardList = () => {
    const { dailyLog, loading, error: logError } = useDailyLog();
    const {
        mealName,
        setMealName,
        showInput,
        setShowInput,
        handleAddMeal,
        error,
    } = useMealCardList(dailyLog);

    const meals = dailyLog?.meals

    if (loading) return <p>Loading daily log...</p>
    if (logError) return <p>{logError}</p>
    if (!dailyLog) return <p>No daily log found</p>

    return (
        <div>
            <h2>Meals</h2>
            <button onClick={() => setShowInput(!showInput)}>
                {showInput ? "Cancel" : 'Add Meal'}
            </button>

            {showInput && (
                <div>
                    <input
                        type="text"
                        value={mealName}
                        onChange={(e) => setMealName(e.target.value)}
                        placeholder="... is it breakfast, ...lunch or maybe dinner?"
                    />
                    <button onClick={handleAddMeal}>Send</button>
                </div>
            )}
            {error && <p>{error}</p>}
            <ul>
                {dailyLog.meals.map((meal) => (
                    <MealCard key={meal.id} meal={meal} />
                ))}
            </ul>
        </div>
    )
};

export default MealCardList;