import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1702643665165 implements MigrationInterface {
    name = 'Init1702643665165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "Description" nvarchar(400)`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "ShortDescription"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "ShortDescription" nvarchar(400) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "ShortDescription"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "ShortDescription" nvarchar(500) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "Description"`);
    }

}
