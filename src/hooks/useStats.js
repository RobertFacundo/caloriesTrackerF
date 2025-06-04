import { useEffect, useState } from "react";
import { fetchProfileStats } from "../services/statsServices";
import { useUser } from "../contexts/userContext";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    BarElement,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    Tooltip,
    Legend
);

export const useProfileStats = (range) => {
    const [data, setData] = useState(null);
    const [deficitTotal, setDeficitTotal] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);
    const [totalGoal, setTotalGoal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { token } = useUser();

    useEffect(() => {
        setLoading(true);

        fetchProfileStats(range, token)
            .then((res) => {
                const logs = res.logs;

                const processed = logs.map((log) => ({
                    date: log.date,
                    weight: log.weight,
                    caloriesGoal: log.goal,
                    caloriesConsumed: log.calories,
                    deficit: log.deficit,
                }));

                setData(processed);
                setDeficitTotal(processed.reduce((sum, d) => sum + d.deficit, 0));
                setTotalCalories(processed.reduce((sum, d) => sum + d.caloriesConsumed, 0));
                setTotalGoal(processed.reduce((sum, d) => sum + d.caloriesGoal, 0));
                setError(null);
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, [range])

    return {
        data,
        deficitTotal,
        totalCalories,
        totalGoal,
        loading,
        error
    }
}