import { NextFunction, Request, Response } from 'express';
import { findTeams } from '../services/team.service';

export const getTeamsHandler = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const teams = await findTeams();

		res.status(200).json({
			status: 'success',
			data: {
				teams,
			},
		});
	} catch (err: any) {
		next(err);
	}
};
