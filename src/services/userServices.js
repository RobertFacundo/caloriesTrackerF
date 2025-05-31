import axios from "axios";

const URL_B = import.meta.env.VITE_API_BASE_URL;

export const meService = async (token) => {
    try {
        const response = await axios.get(`${URL_B}api/v1/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response, 'log del meservice')
        return response.data
    } catch (error) {
        console.error(error)
    };
};

export const updateUserService = async (token, details) => {
    try {
        const response = await axios.patch(`${URL_B}api/v1/users/update_details`, { user: details }, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        console.log(response, ' log userservice')
        return response.data
    } catch (error) {
        console.error(error)
    }
}