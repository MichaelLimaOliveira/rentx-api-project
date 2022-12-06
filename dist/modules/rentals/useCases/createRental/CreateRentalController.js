"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateRentalController = void 0;
var _tsyringe = require("tsyringe");
var _CreateRentalUseCase = require("./CreateRentalUseCase");
class CreateRentalController {
  async handle(req, res) {
    const {
      car_id,
      expected_return_date
    } = req.body;
    const {
      id
    } = req.user;
    const createRentalUseCase = _tsyringe.container.resolve(_CreateRentalUseCase.CreateRentalUseCase);
    const rental = await createRentalUseCase.execute({
      user_id: id,
      car_id,
      expected_return_date
    });
    return res.status(201).json(rental);
  }
}
exports.CreateRentalController = CreateRentalController;