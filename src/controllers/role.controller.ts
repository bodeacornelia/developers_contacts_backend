import { NextFunction, Request, Response } from 'express';
import { findRoles } from '../services/role.service';

export const getRolesHandler = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const roles = await findRoles();

		res.status(200).json({
			status: 'success',
			data: {
				roles,
			},
		});
	} catch (err: any) {
		next(err);
	}
};
