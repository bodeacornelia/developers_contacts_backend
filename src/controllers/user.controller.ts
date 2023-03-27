import { NextFunction, Request, Response } from 'express';
import {
	CreateUserInput,
	DeleteUserInput,
	UpdateUserInput,
} from '../schemas/user.schema';
import {
	createUser,
	findUsers,
	getUser,
	getUserToUpdate,
} from '../services/user.service';
import { findRoleById } from '../services/role.service';
import { findStatusById } from '../services/status.service';
import { findTeamById } from '../services/team.service';
import AppError from '../utils/appError';

// ? POST method:- Create a new User
export const createUserHandler = async (
	req: Request<{}, {}, CreateUserInput>,
	res: Response,
	next: NextFunction
) => {
	try {
		const roleId = req.body.roleId;
		const statusId = req.body.statusId;
		const teamId = req.body.teamId;
		const role = await findRoleById(roleId as string);
		const status = await findStatusById(statusId as string);
		const team = await findTeamById(teamId as string);

		if (!role && !status && !team) {
			return next(new AppError(404, 'Role, Status or Team not found'));
		}

		if (role && status && team) {
			const user = await createUser(req.body, role, status, team);

			res.json({
				status: 'success',
				data: {
					user,
				},
			});
		}
	} catch (err: any) {
		if (err.code === '23505') {
			next(new AppError(409, 'User with that name already exist'));
		}
		next(err);
	}
};

export const getUsersHandler = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const query = req.query;
	const users = await findUsers(query);

	res.json({
		status: 'success',
		data: {
			users,
		},
	});
};

// ? PATCH method:- Update User
export const updateUserHandler = async (
	req: Request<UpdateUserInput['params'], {}, UpdateUserInput['body']>,
	res: Response,
	next: NextFunction
) => {
	const user = await getUserToUpdate(req.params.userId);

	if (!user) {
		return next(new AppError(404, 'User with that ID not found'));
	}

	user.name = req.body.name;
	user.email = req.body.email;
	user.role.id = req.body.roleId;
	user.status.id = req.body.statusId;
	user.team.id = req.body.teamId;

	const updatedUser = await user.save();

	res.json({
		status: 'success',
		data: {
			user: updatedUser,
		},
	});
};

// ? DELETE method:- Delete User
export const deleteUserHandler = async (
	req: Request<DeleteUserInput>,
	res: Response,
	next: NextFunction
) => {
	const user = await getUser(req.params.userId);

	if (!user) {
		return next(new AppError(404, 'User with that ID not found'));
	}

	await user.remove();

	res.json({
		status: 'success',
		data: null,
	});
};
