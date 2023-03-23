import { Role } from '../entities/role.entity';
import { AppDataSource } from '../utils/data-source';

const roleRepository = AppDataSource.getRepository(Role);

export const findRoleById = async (roleId: string) => {
	return await roleRepository.findOneBy({ id: roleId });
};

export const findRoles = async (): Promise<Role[]> => roleRepository.find();
