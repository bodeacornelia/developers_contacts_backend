import express from 'express';
import { getRolesHandler } from '../controllers/role.controller';

const router = express.Router();

router.route('/').get(getRolesHandler);

export default router;
