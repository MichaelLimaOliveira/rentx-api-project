"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCategoriesController = void 0;
var _tsyringe = require("tsyringe");
var _ListCategoriesUseCase = require("./ListCategoriesUseCase");
class ListCategoriesController {
  async handle(req, res) {
    const listCategoriesUseCase = _tsyringe.container.resolve(_ListCategoriesUseCase.ListCategoriesUseCase);
    const allCategories = await listCategoriesUseCase.execute();
    return res.json(allCategories);
  }
}
exports.ListCategoriesController = ListCategoriesController;