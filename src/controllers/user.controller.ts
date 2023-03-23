import { NextFunction, Request, Response } from 'express';
import { CreateUserInput } from '../schemas/user.schema';
import { createUser, findUsers } from '../services/user.service';
import { findRoleById } from '../services/role.service';
import { findStatusById } from '../services/status.service';
import { findTeamById } from '../services/team.service';

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

		if (role && status && team) {
			const user = await createUser(req.body, role, status, team);

			res.status(201).json({
				status: 'success',
				data: {
					user,
				},
			});
		}
	} catch (err: any) {
		if (err.code === '23505') {
			return res.status(409).json({
				status: 'fail',
				message: 'User with that name already exist',
			});
		}
		next(err);
	}
};

export const getUsersHandler = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const query = req.query;
		const users = await findUsers(query);

		res.status(200).json({
			status: 'success',
			data: {
				users,
			},
		});
	} catch (err: any) {
		next(err);
	}
};
