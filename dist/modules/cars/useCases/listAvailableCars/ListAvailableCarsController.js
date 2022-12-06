"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListAvailableCarsController = void 0;
var _tsyringe = require("tsyringe");
var _ListAvailableCarsUseCase = require("./ListAvailableCarsUseCase");
class ListAvailableCarsController {
  async handle(req, res) {
    const {
      category_id,
      name,
      brand
    } = req.query;
    const listAvailableCarsUseCase = _tsyringe.container.resolve(_ListAvailableCarsUseCase.ListAvailableCarsUseCase);
    const cars = await listAvailableCarsUseCase.execute({
      category_id: category_id,
      name: name,
      brand: brand
    });
    return res.json(cars);
  }
}
exports.ListAvailableCarsController = ListAvailableCarsController;