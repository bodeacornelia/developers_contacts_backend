import express from 'express';
import { getStatusesHandler } from '../controllers/status.controller';

const router = express.Router();

router.route('/').get(getStatusesHandler);

export default router;
