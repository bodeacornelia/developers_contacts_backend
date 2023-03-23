import { Status } from '../entities/status.entity';
import { AppDataSource } from '../utils/data-source';

const statusRepository = AppDataSource.getRepository(Status);

export const findStatusById = async (statusId: string) => {
	return await statusRepository.findOneBy({ id: statusId });
};

export const findStatuses = async (): Promise<Status[]> =>
	statusRepository.find();
