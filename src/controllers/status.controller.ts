import { NextFunction, Request, Response } from 'express';
import { findStatuses } from '../services/status.service';

export const getStatusesHandler = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const statuses = await findStatuses();

		res.status(200).json({
			status: 'success',
			data: {
				statuses,
			},
		});
	} catch (err: any) {
		next(err);
	}
};
