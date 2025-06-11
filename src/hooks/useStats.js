import { useEffect, useState, useCallback } from "react";
import { fetchProfileStats } from "../services/statsServices";
import { useUser } from "../contexts/userContext";

export const useProfileStats = (range) => {
    const [data, setData] = useState(null);
    const [deficitTotal, setDeficitTotal] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);
    const [totalGoal, setTotalGoal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { token } = useUser();

    const getStats = useCallback(() => {
        setLoading(true);

        fetchProfileStats(range, token)
            .then((res) => {
                const { data, deficitTotal, totalCalories, totalGoal } = res.logs.reduce(
                    (acc, log) => {
                        const { date, weight, goal, calories, deficit } = log;

                        acc.data.push({
                            date,
                            weight,
                            caloriesGoal: goal,
                            caloriesConsumed: calories,
                            deficit,
                        });

                        acc.deficitTotal += deficit || 0;
                        acc.totalCalories += calories || 0;
                        acc.totalGoal += goal || 0;

                        return acc;
                    },
                    {
                        data: [],
                        deficitTotal: 0,
                        totalCalories: 0,
                        totalGoal: 0,
                    }
                );

                setData(data);
                setDeficitTotal(deficitTotal);
                setTotalCalories(totalCalories);
                setTotalGoal(totalGoal);
                setError(null);
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, [range, token]);

    useEffect(() => {
        getStats();
    }, [getStats]);

    return {
        data,
        deficitTotal,
        totalCalories,
        totalGoal,
        loading,
        error
    }
}