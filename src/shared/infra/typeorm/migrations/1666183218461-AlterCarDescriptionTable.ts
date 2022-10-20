import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class AlterCarDescriptionTable1666183218461
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "cars",
      "descripition",
      new TableColumn({ name: "description", type: "varchar" })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "cars",
      "description",
      new TableColumn({
        name: "descripition",
        type: "varchar",
      })
    );
  }
}
