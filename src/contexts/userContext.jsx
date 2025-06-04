import React, { useState, useEffect, createContext, useContext } from "react";
import { meService, updateUserService } from "../services/userServices";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(()=>{
        const stored = localStorage.getItem('user');
        try{
            console.log(localStorage.getItem('user'),'log del usercontext trycatchstate')
            return stored ? JSON.parse(stored) : null;
        }catch(error){
            console.error("❌ Error al parsear 'user' del localStorage:", stored);
            localStorage.removeItem('user');
            return null
        }
    });
    const [token, setToken] = useState(() => localStorage.getItem('token') || null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadUser = async (tokenToUse) => {
        setLoading(true)
        setError(null)

        try {   
            const userData = await meService(tokenToUse);
            setUser(userData);
            setToken(tokenToUse);
            localStorage.setItem('token', tokenToUse);
            localStorage.setItem('user', JSON.stringify(userData))
        } catch (error) {
            setError(error.message || 'error loading user');
            setUser(null)
            setToken(null)
            localStorage.removeItem('token');
        } finally {
            setLoading(false)
        }
    };

    const updateUserDetails = async (details) => {
        setLoading(true);
        setError(null);
        try {
            const updatedUser = await updateUserService(token, details);
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser))
            console.log('usuario actualizado', updatedUser)
            return updatedUser
        } catch (error) {
            setError(error.message || 'Error updating user details');
        } finally {
            setLoading(false);
        }
    };

    const logOut = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token')
    };

    useEffect(() => {
        if (token) {
            loadUser(token)
        }
    }, []);

    return (
        <UserContext.Provider value={{ user,setUser, token,setToken, loading, error, loadUser, updateUserDetails, logOut, setToken }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext)

