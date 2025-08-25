// Imports
import { Router } from 'express';
import * as RoomController from '../controllers/room.controller';

const router = Router();

router.post('/create', RoomController.createRoom);
router.get('/:id', RoomController.playersInRoom);
router.delete('/delete/:id', RoomController.deleteRoom);

export default router;