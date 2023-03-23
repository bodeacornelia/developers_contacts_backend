import { User } from '../entities/user.entity';
import { Role } from '../entities/role.entity';
import { Status } from '../entities/status.entity';
import { Team } from '../entities/team.entity';
import { AppDataSource } from '../utils/data-source';

const userRepository = AppDataSource.getRepository(User);

export const createUser = async (
	input: Partial<User>,
	role: Role,
	status: Status,
	team: Team
) => {
	return await userRepository.save(
		userRepository.create({ ...input, role, status, team })
	);
};

export const findUsers = async ({
	name,
	sortBy,
	sort,
}: {
	name?: string;
	sortBy?: 'name';
	sort?: 'ASC' | 'DESC';
}): Promise<User[]> => {
	let query = userRepository.createQueryBuilder('user');
	if (name) {
		query = query.where('user.name = :name', { name });
	}

	if (sortBy && sort) {
		query = query.orderBy(`user.${sortBy}`, sort);
	} else {
		query = query.orderBy('RANDOM()');
	}

	const users = await query.getMany();
	return users;
};
