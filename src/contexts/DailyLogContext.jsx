import React, { createContext, useContext, useState, useEffect } from "react";
import { createDailyLog, getDailyLog } from "../services/DailyLogServices";
import { useUser } from './userContext';

const DailyLogContext = createContext();

export const DailyLogProvider = ({ children }) => {
    const { token } = useUser();
    const [dailyLog, setDailyLog] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const today = new Date().toISOString().split("T")[0];

    const loadOrCreateDailyLog = async () => {
        if (!token) return
        setLoading(true);
        setError(null);

        try {
            const logs = await getDailyLog(token);
            let todayLog = logs.find((log) => log.date === today);

            if (!todayLog) {
                todayLog = await createDailyLog(token, today);
                console.log("✅ Daily log creado:", todayLog)
            } else {
                console.log("📦 Daily log cargado:", todayLog);
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
            const todayLog = logs.find((log) => log.date === today);
            if (todayLog) {
                setDailyLog(todayLog);
                console.log("🔁 Daily log refrescado:", todayLog);
            }
        } catch (error) {
            console.error("⛔️ Error refrescando daily log:", error.message);
        }
    };

    useEffect(() => {
        if(!token) return;
        loadOrCreateDailyLog();
    }, [token]);

    return (
        <DailyLogContext.Provider value={{
            dailyLog,
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