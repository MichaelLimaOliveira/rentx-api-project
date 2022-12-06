"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportCategoryController = void 0;
var _tsyringe = require("tsyringe");
var _ImportCategoryUseCase = require("./ImportCategoryUseCase");
class ImportCategoryController {
  async handle(req, res) {
    const {
      file
    } = req;
    const importCategoryUseCase = _tsyringe.container.resolve(_ImportCategoryUseCase.ImportCategoryUseCase);
    await importCategoryUseCase.execute(file);
    return res.status(201).send();
  }
}
exports.ImportCategoryController = ImportCategoryController;