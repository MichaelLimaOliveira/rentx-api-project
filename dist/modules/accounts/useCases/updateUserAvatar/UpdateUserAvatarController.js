"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUserAvatarController = void 0;
var _tsyringe = require("tsyringe");
var _UpdateUserAvatarUseCase = require("./UpdateUserAvatarUseCase");
class UpdateUserAvatarController {
  async hanlde(req, res) {
    const {
      id
    } = req.user;
    const avatar_file = req.file.filename;
    const updateUserAvatarUseCase = _tsyringe.container.resolve(_UpdateUserAvatarUseCase.UpdateUserAvatarUseCase);
    await updateUserAvatarUseCase.execute({
      user_id: id,
      avatar_file
    });
    return res.status(204).send();
  }
}
exports.UpdateUserAvatarController = UpdateUserAvatarController;