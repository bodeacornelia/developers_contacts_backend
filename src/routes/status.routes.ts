import express from 'express';
import { getStatusesHandler } from '../controllers/status.controller';

const router = express.Router();

router.get('/', getStatusesHandler);

export default router;
