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

interface UserApiResponse {
	id: string;
	name: string;
	email: string;
	role: string;
	status: string;
	team: string;
}

export const findUsers = async ({
	name,
	sortBy = 'name',
	sort = 'ASC',
}: {
	name?: string;
	sortBy?: 'name';
	sort?: 'ASC' | 'DESC' | 'RANDOM';
}): Promise<UserApiResponse[]> => {
	let query = userRepository.createQueryBuilder('user');
	if (name) {
		query = query.where('user.name = :name', { name });
	}

	if (sort === 'RANDOM') {
		query = query.orderBy('RANDOM()');
	} else {
		query = query.orderBy(`user.${sortBy}`, sort);
	}

	const users = await query
		.leftJoinAndSelect('user.role', 'role')
		.leftJoinAndSelect('user.status', 'status')
		.leftJoinAndSelect('user.team', 'team')
		.select([
			'user.id',
			'user.name',
			'user.email',
			'role',
			'status',
			'team',
		])
		.getMany();

	return users.map((user) => ({
		...user,
		role: user.role.role,
		status: user.status.status,
		team: user.team.team,
	})) as UserApiResponse[];
};

export const getUser = async (userId: string) => {
	return await userRepository.findOneBy({ id: userId });
};

export const getUserToUpdate = async (userId: string) =>
	userRepository
		.createQueryBuilder('user')
		.leftJoinAndSelect('user.role', 'role')
		.leftJoinAndSelect('user.status', 'status')
		.leftJoinAndSelect('user.team', 'team')
		.where('user.id = :id', { id: userId })
		.getOne();
