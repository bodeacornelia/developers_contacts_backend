import express from 'express';
import {
	createUserHandler,
	getUsersHandler,
} from '../controllers/user.controller';
import { validate } from '../middleware/validate';
import { createUserSchema } from '../schemas/user.schema';

const router = express.Router();

router
	.route('/')
	.post(validate(createUserSchema), createUserHandler)
	.get(getUsersHandler);

export default router;
