import { useDailyLog } from "../contexts/DailyLogContext";
import { useLocation } from "react-router-dom";
import { updateTrainingDay } from "../services/updateTrainingDayService";
import { useUser } from "../contexts/userContext";
import React, { useState, useCallback, useEffect, useMemo } from "react";


const useHomeStats = () => {
    const [updating, setUpdating] = useState(false)
    const { token, user } = useUser();
    const { dailyLog, loading, error, refreshDailyLog } = useDailyLog();
    const location = useLocation();

    const toggleTrainingDay = useCallback(async () => {
        if (!dailyLog) return;
        setUpdating(true)
        const today = new Date().toLocaleDateString("en-CA");

        try {
            const res = await updateTrainingDay({
                date: today,
                trainingDay: !dailyLog.training_day,
                token: token
            });
            console.log("Respuesta updateTrainingDay!!!!!!!!!!!:", res);
            await refreshDailyLog();
        } catch (error) {
            console.error('Error updating training day', error)
        } finally {
            setUpdating(false)
        }
    }, [dailyLog, refreshDailyLog, token]);

    useEffect(() => {
        refreshDailyLog();
    }, [location.pathname])

    const calorieDeficit = useMemo(() => dailyLog?.daily_calorie_deficit ?? null, [dailyLog]);
    const dailyCalories = useMemo(() => dailyLog?.daily_calories_goal ?? null, [dailyLog]);

    return {
        loading,
        error,
        refreshDailyLog,
        dailyNutrition: dailyLog?.daily_total_nutrition || null,
        calorieDeficit,
        dailyCalories,
        trainingDay: dailyLog?.training_day || false,
        toggleTrainingDay,
        updating
    }
};

export default useHomeStats;