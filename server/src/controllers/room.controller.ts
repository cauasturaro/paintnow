// Imports
import { Request, Response} from 'express';

import * as RoomService from '../services/room.service';

export const createRoom = async (req: Request, res: Response) => {
    try {
        const response = await RoomService.createRoom(req.body);
        res.status(201).json(response);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export const deleteRoom = async (req: Request, res: Response) => {
    try {
        if (!req.params.id) return res.status(400).json({ error: 'Room ID is missing' });
        await RoomService.deleteRoom(String(req.params.id));
        res.status(204).end();
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const playersInRoom = async (req: Request, res: Response) => {
    try{
        if (!req.params.id) return res.status(400).json({ error: 'Room ID is missing' });
        const players = await RoomService.playersInRoom(String(req.params.id));
        res.status(200).json({ players });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}