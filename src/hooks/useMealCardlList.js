import { useState, useEffect } from "react";
import { createMeal } from "../services/mealServices";
import { useDailyLog } from "../contexts/DailyLogContext";

export const useMealCardList = (dailyLog) => {
    const { refreshDailyLog } = useDailyLog()
    const [mealName, setMealName] = useState('');
    const [error, setError] = useState(null);
    const [showInput, setShowInput] = useState(false);

    const handleShowInput = () => {
        setShowInput(true);
    };

    const handleChange = (value) => {
        setMealName(value);
    };

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
        handleAddMeal,
        error,
        handleShowInput,
        handleChange,
    }
}