import { useDailyLog } from "../contexts/DailyLogContext";
import { useLocation } from "react-router-dom";
import { updateTrainingDay } from "../services/updateTrainingDayService";
import { useUser } from "../contexts/userContext";
import { useState, useCallback, useEffect } from "react";


const useHomeStats = () => {
    const [updating, setUpdating] = useState(false)
    const { token, user } = useUser();
    const { dailyLog, loading, error, refreshDailyLog } = useDailyLog();
    const location = useLocation(); 

    const toggleTrainingDay = useCallback(async () => {
        if (!dailyLog) return;
        setUpdating(true)
        const today = new Date().toISOString().split("T")[0];

        try {
            await updateTrainingDay({
                date: today,
                trainingDay: !dailyLog.training_day,
                token: token
            });
            await refreshDailyLog()
        } catch (error) {
            console.error('Error updating training day', error)
        } finally {
            setUpdating(false)
        }
    }, [dailyLog, refreshDailyLog, token]);

    useEffect(() => {
            refreshDailyLog();
    }, [location.pathname])

    return {
        loading,
        error,
        refreshDailyLog,
        dailyNutrition: dailyLog?.daily_total_nutrition || null,
        calorieDeficit: dailyLog?.daily_calorie_deficit || null,
        dailyCalories: dailyLog?.daily_calories_goal || null,
        trainingDay: dailyLog?.training_day || false,
        toggleTrainingDay,
        updating
    }
};

export default useHomeStats;