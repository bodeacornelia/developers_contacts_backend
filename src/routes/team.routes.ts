import express from 'express';
import { getTeamsHandler } from '../controllers/team.controller';

const router = express.Router();

router.route('/').get(getTeamsHandler);

export default router;
