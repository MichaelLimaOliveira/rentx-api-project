"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserController = void 0;
var _tsyringe = require("tsyringe");
var _CreateUserUseCase = require("./CreateUserUseCase");
class CreateUserController {
  async handle(req, res) {
    const data = req.body;
    const createUserUseCse = _tsyringe.container.resolve(_CreateUserUseCase.CreateUserUseCase);
    await createUserUseCse.execute(data);
    return res.status(201).send();
  }
}
exports.CreateUserController = CreateUserController;