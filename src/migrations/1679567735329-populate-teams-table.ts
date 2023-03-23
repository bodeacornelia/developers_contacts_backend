import { MigrationInterface, QueryRunner } from 'typeorm';

export class populateTeamsTable1679567735329 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			"INSERT INTO teams (team) VALUES ('A'), ('B'), ('C')"
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			"DELETE FROM teams WHERE role IN ('A', 'B', 'C')"
		);
	}
}
