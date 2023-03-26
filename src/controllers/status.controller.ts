import { NextFunction, Request, Response } from 'express';
import { findStatuses } from '../services/status.service';

export const getStatusesHandler = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const statuses = await findStatuses();

	res.json({
		status: 'success',
		data: {
			statuses,
		},
	});
};
