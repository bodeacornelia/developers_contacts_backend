import express from 'express';
import { getRolesHandler } from '../controllers/role.controller';

const router = express.Router();

router.get('/', getRolesHandler);

export default router;
