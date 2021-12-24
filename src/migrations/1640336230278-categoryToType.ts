import { MigrationInterface, QueryRunner } from 'typeorm';

export class categoryToType1640336230278 implements MigrationInterface {
  name = 'categoryToType1640336230278';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE mentions RENAME COLUMN category To type',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE mentions RENAME COLUMN type To category',
    );
  }
}
