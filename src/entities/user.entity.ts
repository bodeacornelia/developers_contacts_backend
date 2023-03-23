import { Entity, Column, ManyToOne, Index } from 'typeorm';
import Model from './model.entity';
import { Role } from './role.entity';
import { Status } from './status.entity';
import { Team } from './team.entity';

@Entity('users')
export class User extends Model {
	@Column({
		unique: true,
	})
	name: string;

	@Column({
		unique: true,
	})
	email: string;

	@ManyToOne(() => Role)
	role: Role;

	@ManyToOne(() => Status)
	status: Status;

	@ManyToOne(() => Team)
	team: Team;
}
