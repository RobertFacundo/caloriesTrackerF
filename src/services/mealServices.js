import axios from "axios";

const URL_B = import.meta.env.VITE_API_BASE_URL;

export const createMeal = async (dailyLogId, mealData) => {
    try {
        const response = await axios.post(`${URL_B}api/v1/daily_logs/${dailyLogId}/meals`,
            { meal: mealData }
        );
        console.log(response.data, 'log de create meal')
        return response.data
    } catch (error) {
        console.error(error)
        throw Error
    }
}

export const deleteMeal = async (dailyLogId, mealId, token) => {
    try {
        const response = await axios.delete(`${URL_B}api/v1/daily_logs/${dailyLogId}/meals/${mealId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }
        );
        console.log(response,'log del deleteMeal')
        return response.data;
    } catch (error){
        console.error(error);
        throw error;
    }
}