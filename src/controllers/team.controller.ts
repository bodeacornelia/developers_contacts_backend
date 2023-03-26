import { NextFunction, Request, Response } from 'express';
import { findTeams } from '../services/team.service';

export const getTeamsHandler = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const teams = await findTeams();

	res.json({
		status: 'success',
		data: {
			teams,
		},
	});
};
