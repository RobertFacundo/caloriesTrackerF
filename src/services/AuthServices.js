import axios from "axios"

const URL_B = import.meta.env.VITE_API_BASE_URL;

export const AuthServices = async (type, credentials) => {

    try {

        const payload = type === 'signup'
            ? { user: credentials }
            : credentials

        const response = await axios.post(`${URL_B}api/v1/${type}`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response, 'log del authservice')
        return response.data
    } catch (error) {
        console.error(error)
        throw error;
    }
}

