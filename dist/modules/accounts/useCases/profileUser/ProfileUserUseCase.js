"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileUserUseCase = void 0;
var _tsyringe = require("tsyringe");
var _UserMap = require("../../mapper/UserMap");
var _IUsersRepository = require("../../repositories/IUsersRepository");
var _dec, _dec2, _dec3, _dec4, _class;
let ProfileUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("IUsersRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.IUsersRepository === "undefined" ? Object : _IUsersRepository.IUsersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ProfileUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(id) {
    const user = await this.userRepository.findById(id);
    return _UserMap.UserMap.toDTO(user);
  }
}) || _class) || _class) || _class) || _class);
exports.ProfileUserUseCase = ProfileUserUseCase;