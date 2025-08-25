// Imports
import { Request, Response} from 'express';

import * as PlayerService from '../services/player.service';

export const join = async (req: Request, res: Response) => {
    try {
        const response = await PlayerService.join(req.body);
        res.status(201).json(response);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export const leave = async (req: Request, res: Response) => {
    try {
        if (!req.query.id) return res.status(400).json({ error: 'Player ID is missing' });

        await PlayerService.leave(req.query.id);
        res.status(204).end();
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}