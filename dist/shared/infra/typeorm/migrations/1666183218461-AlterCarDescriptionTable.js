"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlterCarDescriptionTable1666183218461 = void 0;
var _typeorm = require("typeorm");
class AlterCarDescriptionTable1666183218461 {
  async up(queryRunner) {
    await queryRunner.changeColumn("cars", "descripition", new _typeorm.TableColumn({
      name: "description",
      type: "varchar"
    }));
  }
  async down(queryRunner) {
    await queryRunner.changeColumn("cars", "description", new _typeorm.TableColumn({
      name: "descripition",
      type: "varchar"
    }));
  }
}
exports.AlterCarDescriptionTable1666183218461 = AlterCarDescriptionTable1666183218461;