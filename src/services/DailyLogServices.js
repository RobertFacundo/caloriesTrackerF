import axios from "axios";

const URL_B = import.meta.env.VITE_API_BASE_URL;

export const createDailyLog = async (token, date) => {
    try {
        const response = await axios.post(`${URL_B}api/v1/daily_logs`,
            { date },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            }
        );
        console.log(response.data, 'log del createDailylogservice')
        return response.data

    } catch (error) {
        console.error(error)
        throw (error)
    }
}

export const getDailyLog = async (token) => {
    try {
        const response = await axios.get(`${URL_B}api/v1/daily_logs`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        console.log(response, 'log getdaily log')
        return response.data
    } catch {

    }
}