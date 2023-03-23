import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
	body: object({
		name: string({
			required_error: 'Name is required',
		}),
		email: string({
			required_error: 'Email address is required',
		}).email('Invalid email address'),

		roleId: string(),
		statusId: string(),
		teamId: string(),
	}),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>['body'];
