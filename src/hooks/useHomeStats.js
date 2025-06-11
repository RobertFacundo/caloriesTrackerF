import { useDailyLog } from "../contexts/DailyLogContext";
import { useLocation } from "react-router-dom";
import { updateTrainingDay } from "../services/updateTrainingDayService";
import { useUser } from "../contexts/userContext";
import React, { useState, useCallback, useEffect, useMemo } from "react";


const useHomeStats = () => {
    const { dailyLog, loading, error, refreshDailyLog } = useDailyLog();
    const location = useLocation();

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
    }
};

export default useHomeStats;