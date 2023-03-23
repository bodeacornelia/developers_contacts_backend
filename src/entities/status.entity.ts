import { Entity, Column } from 'typeorm';
import Model from './model.entity';

@Entity('statuses')
export class Status extends Model {
	@Column()
	status: string;
}
