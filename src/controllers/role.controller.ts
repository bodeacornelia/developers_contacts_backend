import { NextFunction, Request, Response } from 'express';
import { findRoles } from '../services/role.service';

export const getRolesHandler = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const roles = await findRoles();

	res.json({
		status: 'success',
		data: {
			roles,
		},
	});
};
