import { useState, useEffect } from "react";
import { createMeal } from "../services/mealServices";
import { useDailyLog } from "../contexts/DailyLogContext";

export const useMealCardList = (dailyLog) => {
    const {refreshDailyLog} = useDailyLog()
    const [mealName, setMealName] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [error, setError] = useState(null);   

    const handleAddMeal = async () => {
        if (!mealName.trim()) return


        try {
            await createMeal(dailyLog.id, { name: mealName });
            await refreshDailyLog();
            
            setMealName("");
            setShowInput(false);
            setError(null);
        } catch (error) {
            setError(error.message);
        }
    };

    return {
        mealName,
        setMealName,
        showInput,
        setShowInput,
        handleAddMeal,
        error,
    }
}