// Imports
import { Router } from 'express';
import * as PlayerController from '../controllers/player.controller';

const router = Router();

router.post('/join', PlayerController.join);
router.post('/leave/:id', PlayerController.leave);

export default router;