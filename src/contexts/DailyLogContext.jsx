import React, { createContext, useContext, useState, useEffect } from "react";
import { createDailyLog, getDailyLog, getTodayDailyLog } from "../services/DailyLogServices";
import { useUser } from './userContext';

const DailyLogContext = createContext();

export const DailyLogProvider = ({ children }) => {
    const { token } = useUser();
    const [dailyLog, setDailyLog] = useState({
        meals: [],
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const today = new Date().toLocaleDateString("en-CA");

    const loadOrCreateDailyLog = async () => {
        if (!token) return
        setLoading(true);
        setError(null);

        try {
            let todayLog;

            try {
                todayLog = await getTodayDailyLog(token);
                console.log("📦 Log del día cargado:", todayLog)
            } catch (e) {
                if (e.response?.status === 404) {
                    todayLog = await createDailyLog(token, today);
                    console.log("✅ Log del día creado:", todayLog);
                } else {
                    throw e;
                }
            }
            setDailyLog(todayLog);
        } catch (error) {
            setError(error.message || "Error al cargar el daily log");
            console.error("⛔️ Error daily log:", error);
        } finally {
            setLoading(false);
        }
    };

    const refreshDailyLog = async () => {
        if (!token) return
        try {
            const logs = await getDailyLog(token);
            const todayLogs = logs.filter((log) => log.date === today);
            if (todayLogs.length > 0) {
                const latestLog = todayLogs.reduce((latest, current) =>
                    new Date(current.updated_at) > new Date(latest.updated_at) ? current : latest
                );
                setDailyLog(latestLog);
                console.log("🔁 Daily log refrescado (más reciente):", latestLog);
            }
        } catch (error) {
            console.error("⛔️ Error refrescando daily log:", error.message);
        }
    };

    useEffect(() => {
        let isMounted = true;
        if (!token) return;

        const load = async () => {
            await loadOrCreateDailyLog();
        };

        load();

        return () => { isMounted = false };

    }, [token]);

    return (
        <DailyLogContext.Provider value={{
            dailyLog,
            setDailyLog,
            loading,
            error,
            refreshDailyLog,
            loadOrCreateDailyLog
        }}>
            {children}
        </DailyLogContext.Provider>
    );
};

export const useDailyLog = () => useContext(DailyLogContext);