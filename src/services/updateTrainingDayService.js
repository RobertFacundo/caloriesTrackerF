import axios from "axios";

const URL_B = import.meta.env.VITE_API_BASE_URL;

export const updateTrainingDay = async ({ date, trainingDay, token }) => {
    try {
        console.log(date, 'log del utd');
        console.log(trainingDay, 'log del utd');
        console.log(token, 'log del utd')
        console.log(URL_B, 'log del utd')
        const response = await axios.patch(`${URL_B}api/v1/daily_logs/update_training_day`, {
            date,
            training_day: trainingDay,
        },{
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        console.log(response, 'log del updateTraining day');
        return response.data
    } catch (error){
        console.error(error)
        throw error
    }
}