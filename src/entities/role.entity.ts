import { Entity, Column } from 'typeorm';
import Model from './model.entity';

@Entity('roles')
export class Role extends Model {
	@Column()
	role: string;
}
