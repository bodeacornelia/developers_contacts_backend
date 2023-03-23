import { Entity, Column } from 'typeorm';
import Model from './model.entity';

@Entity('teams')
export class Team extends Model {
	@Column()
	team: string;
}
