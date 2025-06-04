import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/userContext";

export const useOnBoarding = () => {
    const [details, setDetails] = useState({
        weight: "",
        height: "",
        age: "",
        gender: "",
        activity_level: ""
    })
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { updateUserDetails, loadUser, token } = useUser();

    const navigate = useNavigate();

    const handleChange = (e) => {
        setDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null)

        try {
            await updateUserDetails({
                ...details,
                onboarding_completed: true
            });

            await loadUser(token)
            
            navigate('/Home')
        } catch (error) {
            setError('There was a problem during the submit')
        }finally{
            setLoading(false)
        }
    };

    return {
        details,
        error,
        handleChange,
        handleSubmit,
        loading,
    }
}