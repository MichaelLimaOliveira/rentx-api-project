"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateUserController = void 0;
var _tsyringe = require("tsyringe");
var _AuthenticateUserUseCase = require("./AuthenticateUserUseCase");
class AuthenticateUserController {
  async handle(req, res) {
    const {
      email,
      password
    } = req.body;
    const authenticateUserUseCase = _tsyringe.container.resolve(_AuthenticateUserUseCase.AuthenticateUserUseCase);
    const token = await authenticateUserUseCase.execute({
      email,
      password
    });
    return res.json(token);
  }
}
exports.AuthenticateUserController = AuthenticateUserController;