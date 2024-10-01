import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000"
});

export const useApi = () => ({
    PersonRoute: async () => {
        const response = await api.get('/personagens');
        return response.data;
    },
    MissionsRoute: async () => {
        const response = await api.get('/missoes');
        return response.data;
    },
});