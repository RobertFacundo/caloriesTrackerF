import { useState, useEffect, useCallback } from 'react';
import { useUser } from '../contexts/userContext';
import { useDailyLog } from '../contexts/DailyLogContext';

export const useProfile = () => {
    const { user, setUser, updateUserDetails, token, loading, error: contextError } = useUser();
    const { refreshDailyLog } = useDailyLog();
    const [localUserData, setLocalUserData] = useState(null);
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState(null);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        if (user) setLocalUserData(user);
    }, [user]);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setLocalUserData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }, []);

    const handleUpdate = useCallback(async () => {
        setUpdating(true)
        try {
            const updatedUser = await updateUserDetails(localUserData);
            setLocalUserData(updatedUser);
            setUser(updatedUser)
            await refreshDailyLog()

            setEditing(false);
            setError(null)
        } catch (error) {
            setError('Error updating useProfile')
            console.error(error)
        } finally {
            setUpdating(false);
        }
    }, [localUserData, updateUserDetails, refreshDailyLog, setUser]);

    return {
        userData: localUserData,
        editing,
        setEditing,
        handleInputChange,
        handleUpdate,
        error: error || contextError,
        loading,
        updating
    }
}