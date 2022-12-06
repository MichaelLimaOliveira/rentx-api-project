"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileUserController = void 0;
var _tsyringe = require("tsyringe");
var _ProfileUserUseCase = require("./ProfileUserUseCase");
class ProfileUserController {
  async handle(req, res) {
    const {
      id
    } = req.user;
    const profileUserUseCase = _tsyringe.container.resolve(_ProfileUserUseCase.ProfileUserUseCase);
    const user = await profileUserUseCase.execute(id);
    return res.json(user);
  }
}
exports.ProfileUserController = ProfileUserController;