import { useState } from "react";
import { AuthServices } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/userContext";

export function useAuth() {
    const [isLoginView, setIsLoginView] = useState(false);
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [showOnBoarding, setShowOnBoarding] = useState(false)
    const { setUser } = useUser();

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


    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        setError(null)

        const type = isLoginView ? 'login' : 'signup';

        try {
            const response = await AuthServices(type, credentials);

            console.log(response, 'log del hook')

            const { user, token } = response;

            localStorage.setItem('token', token)

            console.log(response, 'log del hook');
            localStorage.setItem('user', JSON.stringify(user))
            setUser(user)

            if (!user.onboarding_completed) {
                setShowOnBoarding(true)
            } else {
                navigate('/Home');
            }
            return { user, token }
        } catch (error) {
            console.error(error)
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
        showOnBoarding
    }
}