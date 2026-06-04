import axios from "axios";

const apiClient = axios.create({
    baseURL: '/api',
    params: {
        key: import.meta.env.VITE_RAWG_API_KEY,
    },
});

export default apiClient;