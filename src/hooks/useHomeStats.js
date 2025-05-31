import { useDailyLog } from "../contexts/DailyLogContext";
import { useUser } from "../contexts/userContext";


const useHomeStats = () => {
    const {user} = useUser();

    const {dailyLog, loading, error, refreshDailyLog} = useDailyLog();

    const dailyCalories = user.daily_calories_goal
    const dailyNutrition = dailyLog?.daily_total_nutrition || null;
    const calorieDeficit = dailyLog?.daily_calorie_deficit || null;

    return {
        loading,
        error,
        refreshDailyLog,
        dailyNutrition,
        calorieDeficit,
        refreshDailyLog,  
        dailyCalories  
    }
};

export default useHomeStats;