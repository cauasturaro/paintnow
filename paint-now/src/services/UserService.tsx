// Imports
import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const playerJoin = async (nickname: string, roomId: string) => {
    try {
        await api.post('/player/join', {
            nickname: nickname,
            roomId: roomId
        })
    } catch (error) {
        console.error('Error creating player:', error);
        throw error;
    }
}

export const playerLeft = async (id: number) => {
    try {
        await api.post(`/player/leave/${id}`)
    } catch (error) {
        console.error('Error deleting player:', error);
        throw error;
    }
}