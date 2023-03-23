import { MigrationInterface, QueryRunner } from 'typeorm';

export class populateStatusesTable1679567693159 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			"INSERT INTO statuses (status) VALUES ('Full time'), ('Contractor'), ('Temporarily unavailable')"
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			"DELETE FROM statuses WHERE role IN ('Full time', 'Contractor', 'Temporarily unavailable')"
		);
	}
}
