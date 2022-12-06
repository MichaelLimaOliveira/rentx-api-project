"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResetPasswordUserController = void 0;
var _tsyringe = require("tsyringe");
var _ResetPasswordUserUseCase = require("./ResetPasswordUserUseCase");
class ResetPasswordUserController {
  async handle(req, res) {
    const {
      token
    } = req.query;
    const {
      password
    } = req.body;
    const resetPasswordUserUseCase = _tsyringe.container.resolve(_ResetPasswordUserUseCase.ResetPasswordUserUseCase);
    await resetPasswordUserUseCase.execute({
      token: String(token),
      password
    });
    return res.send();
  }
}
exports.ResetPasswordUserController = ResetPasswordUserController;