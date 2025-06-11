import { useState, useCallback } from "react";
import { createMeal } from "../services/mealServices";
import { useDailyLog } from "../contexts/DailyLogContext";

export const useMealCardList = () => {
    const { setDailyLog, dailyLog } = useDailyLog()
    const [mealName, setMealName] = useState('');
    const [error, setError] = useState(null);
    const [showInput, setShowInput] = useState(false);
    const [adding, setAdding] = useState(false);

    const handleShowInput = useCallback(() => setShowInput(true), []);
    const handleChange = useCallback((value) => setMealName(value), []);

    const handleAddMeal = async () => {
        if (!mealName.trim()) return;
        if (adding) return;
        setAdding(true);

        try {
            const newMeal = await createMeal(dailyLog.id, { name: mealName });
            setDailyLog((prevLog) => ({
                ...prevLog,
                 meals: [...(prevLog.meals || []), newMeal]
            }));

            setMealName("");
            setShowInput(false);
            setError(null);
        } catch (error) {
            const message = error?.response?.data?.error || error.message || "Ocurrió un error al agregar la comida";
            setError(message);
        } finally {
            setAdding(false)
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
        adding
    }
}