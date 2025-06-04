import axios from "axios";

const URL_B = import.meta.env.VITE_API_BASE_URL;

export const addIngredient = async (dailyLogId, mealId, ingredientData, token) => {
    try {
        const response = await axios.post(`${URL_B}api/v1/daily_logs/${dailyLogId}/meals/${mealId}/ingredients`,
            { ingredient: ingredientData },
            {
                headers:
                {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );
        console.log(response.data, ' log del ingredientservice');
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
};

export const deleteIngredient = async (ingredientId, mealId, dailyLogId, token) => {
    try {
        const response = await axios.delete(`${URL_B}api/v1/daily_logs/${dailyLogId}/meals/${mealId}/ingredients/${ingredientId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        )
        console.log(response, ' log de deleteingredientservice')
        return true
    } catch (error) {
        console.error(error)
        throw error
    }
}