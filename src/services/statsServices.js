import axios from "axios";

const URL_B = import.meta.env.VITE_API_BASE_URL;

export const fetchProfileStats = async (range, token) => {
    try {
        const response = await axios.get(`${URL_B}api/v1/stats/${range}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        });
        console.log(response, 'log del user fetchstats')
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

