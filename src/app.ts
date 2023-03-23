require('dotenv').config();
import config from 'config';
import validateEnv from './utils/validateEnv';
import express, { NextFunction, Request, Response } from 'express';
import { AppDataSource } from './utils/data-source';
import AppError from './utils/appError';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRouter from './routes/user.routes';
import roleRouter from './routes/role.routes';
import statusRouter from './routes/status.routes';
import teamRouter from './routes/team.routes';
import 'reflect-metadata';

AppDataSource.initialize()
	.then(async () => {
		validateEnv();

		// create express app
		const app = express();

		app.use(express.json({ limit: '10kb' }));

		app.use(cookieParser());

		if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

		app.use(cors());

		app.use('/api/users', userRouter);
		app.use('/api/roles', roleRouter);
		app.use('/api/statuses', statusRouter);
		app.use('/api/teams', teamRouter);

		// // HEALTH CHECKER
		// app.get('/api/healthchecker', async (_, res: Response) => {
		// 	const message = await redisClient.get('try');
		// 	res.status(200).json({
		// 		status: 'success',
		// 		message,
		// 	});
		// });

		app.all('*', (req: Request, res: Response, next: NextFunction) => {
			next(new AppError(404, `Route ${req.originalUrl} not found`));
		});

		// GLOBAL ERROR HANDLER
		app.use(
			(
				error: AppError,
				req: Request,
				res: Response,
				next: NextFunction
			) => {
				error.status = error.status || 'error';
				error.statusCode = error.statusCode || 500;

				res.status(error.statusCode).json({
					status: error.status,
					message: error.message,
				});
			}
		);

		// start express server
		const port = config.get<number>('port');
		app.listen(port);

		console.log(`Server started on port: ${port}`);
	})
	.catch((error) => console.log(error));
