// Imports
import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const createRoom = async (nickname: string) => {
    try {
        const response = await api.post('/room/create', {
            nickname: nickname,
        })
        return response.data;
    } catch (error) {
        console.error('Error creating room:', error);
        throw error;
    }
}

export const playersInRoom = async (id: string) => {
    try{
        const response = await api.get(`/room/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error trying to fetch for players in room:', error);
        throw error;
    }
}

export const deleteRoom = async (id: string) => {
    try {
        await api.post(`/room/delete/${id}`);
    } catch (error) {
        console.error('Error deleting room:', error);
        throw error;
    }
}