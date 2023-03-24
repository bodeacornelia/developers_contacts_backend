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

const params = {
	params: object({
		userId: string(),
	}),
};

export const updateUserSchema = object({
	...params,
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
export type UpdateUserInput = TypeOf<typeof updateUserSchema>;
