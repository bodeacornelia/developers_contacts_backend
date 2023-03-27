import express from 'express';
import {
	createUserHandler,
	deleteUserHandler,
	getUsersHandler,
	updateUserHandler,
} from '../controllers/user.controller';
import { validate } from '../middleware/validate';
import {
	createUserSchema,
	deleteUserSchema,
	updateUserSchema,
} from '../schemas/user.schema';

const router = express.Router();

router
	.route('/')
	.post(validate(createUserSchema), createUserHandler)
	.get(getUsersHandler);

router
	.route('/:userId')
	.patch(validate(updateUserSchema), updateUserHandler)
	.delete(validate(deleteUserSchema), deleteUserHandler);

export default router;
