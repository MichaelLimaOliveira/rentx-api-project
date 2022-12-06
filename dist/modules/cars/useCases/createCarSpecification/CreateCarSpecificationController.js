"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCarSpecificationController = void 0;
var _tsyringe = require("tsyringe");
var _CreateCarSpecificationUseCase = require("./CreateCarSpecificationUseCase");
class CreateCarSpecificationController {
  async handle(req, res) {
    const {
      id
    } = req.params;
    const {
      specification_id
    } = req.body;
    const createCarSpecificationUseCase = _tsyringe.container.resolve(_CreateCarSpecificationUseCase.CreateCarSpecificationUseCase);
    const cars = await createCarSpecificationUseCase.execute({
      car_id: id,
      specification_id
    });
    return res.status(201).json(cars);
  }
}
exports.CreateCarSpecificationController = CreateCarSpecificationController;