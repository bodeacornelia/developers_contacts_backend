import express from 'express';
import {
	createUserHandler,
	getUsersHandler,
	updateUserHandler,
} from '../controllers/user.controller';
import { validate } from '../middleware/validate';
import { createUserSchema, updateUserSchema } from '../schemas/user.schema';

const router = express.Router();

router
	.route('/')
	.post(validate(createUserSchema), createUserHandler)
	.get(getUsersHandler);

router.route('/:userId').patch(validate(updateUserSchema), updateUserHandler);

export default router;
