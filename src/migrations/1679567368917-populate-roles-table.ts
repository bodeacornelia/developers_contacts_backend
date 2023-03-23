import { MigrationInterface, QueryRunner } from 'typeorm';

export class populateRolesTable1679567368917 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			"INSERT INTO roles (role) VALUES ('Fullstack'), ('Frontend'), ('Backend')"
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			"DELETE FROM roles WHERE role IN ('Fullstack', 'Frontend', 'Backend')"
		);
	}
}
