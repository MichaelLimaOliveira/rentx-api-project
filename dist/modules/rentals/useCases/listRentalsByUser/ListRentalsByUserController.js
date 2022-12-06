"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListRentalsByUserController = void 0;
var _tsyringe = require("tsyringe");
var _ListRentalsByUserUseCase = require("./ListRentalsByUserUseCase");
class ListRentalsByUserController {
  async handle(req, res) {
    const {
      id
    } = req.user;
    const listRentalsByUserUseCase = _tsyringe.container.resolve(_ListRentalsByUserUseCase.ListRentalsByUserUseCase);
    const rentals = await listRentalsByUserUseCase.execute(id);
    res.status(200).json(rentals);
  }
}
exports.ListRentalsByUserController = ListRentalsByUserController;