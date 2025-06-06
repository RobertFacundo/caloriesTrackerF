import { useState } from "react";
import { AuthServices } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import { useDailyLog } from "../contexts/DailyLogContext";

export function useAuth() {
    const { loadOrCreateDailyLog } = useDailyLog();
    const [isLoginView, setIsLoginView] = useState(false);
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [showOnBoarding, setShowOnBoarding] = useState(false)
    const { setUser, setToken } = useUser();

    const navigate = useNavigate()

    function switchToLogin() {
        setIsLoginView(true);
    }
    function switchToSignUp() {
        setIsLoginView(false);
    }

    function handleChange(e) {
        setCredentials((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    function validatePassword(password){
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        return regex.test(password);
    }


    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if(!isLoginView && !validatePassword(credentials.password)){
            setError('Password must be at least 6 characters and include at least one letter and one number.');
            setLoading(false);
            return;
        }

        const type = isLoginView ? 'login' : 'signup';

        try {
            const response = await AuthServices(type, credentials);

            console.log(response, 'log del hook')

            const { user, token } = response;

            if (token) {
                localStorage.setItem('token', token)
            }

            console.log(response, 'log del hook');

            if (user) {
                localStorage.setItem('user', JSON.stringify(user))
            }

            setUser(user)
            setToken(token)

            await loadOrCreateDailyLog();

            if (!user.onboarding_completed) {
                setShowOnBoarding(true)
            } else {
                navigate('/Home');
            }
            return { user, token }
        } catch (error) {
            console.error(error);

            if(error?.response?.data?.errors){
                setError(error.response.data.errors[0]);
            }else if(error?.response?.data?.message){
                setError(error.response.data.message);;
            }else if(error?.message){
                setError(error.message);
            }else{
                setError('Unexpected error ocurred')
            }
        } finally {
            setLoading(false)
        }
    }

    return {
        isLoginView,
        credentials,
        switchToLogin,
        switchToSignUp,
        handleChange,
        handleSubmit,
        loading,
        error,
        showOnBoarding,
        validatePassword
    }
}