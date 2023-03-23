import { Team } from '../entities/team.entity';
import { AppDataSource } from '../utils/data-source';

const teamRepository = AppDataSource.getRepository(Team);

export const findTeamById = async (teamId: string) => {
	return await teamRepository.findOneBy({ id: teamId });
};

export const findTeams = async (): Promise<Team[]> => teamRepository.find();
