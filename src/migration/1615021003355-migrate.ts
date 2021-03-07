import {MigrationInterface, QueryRunner} from "typeorm";

export class migrate1615021003355 implements MigrationInterface {
    name = 'migrate1615021003355'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` ADD `deleted_at` timestamp(6) NULL");
        await queryRunner.query("CREATE INDEX `IDX_66066600c02e85707cc0d1ec7a` ON `product` (`deleted_at`)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_66066600c02e85707cc0d1ec7a` ON `product`");
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `deleted_at`");
    }

}
