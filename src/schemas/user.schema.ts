import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
	body: object({
		name: string({
			required_error: 'Name is required',
		}),
		email: string({
			required_error: 'Email address is required',
		}).email('Invalid email address'),

		roleId: string().uuid(),
		statusId: string().uuid(),
		teamId: string().uuid(),
	}),
});

const params = {
	params: object({
		userId: string().uuid(),
	}),
};

export const deleteUserSchema = object({
	...params,
});

export const updateUserSchema = object({
	...params,
	body: object({
		name: string({
			required_error: 'Name is required',
		}),
		email: string({
			required_error: 'Email address is required',
		}).email('Invalid email address'),

		roleId: string().uuid(),
		statusId: string().uuid(),
		teamId: string().uuid(),
	}),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>['body'];
export type UpdateUserInput = TypeOf<typeof updateUserSchema>;
export type DeleteUserInput = TypeOf<typeof deleteUserSchema>['params'];
