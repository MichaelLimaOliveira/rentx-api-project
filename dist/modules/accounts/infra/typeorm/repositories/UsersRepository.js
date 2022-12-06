"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;
var _typeorm = require("typeorm");
var _user = require("../entities/user");
class UserRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_user.User);
  }
  async create({
    name,
    password,
    email,
    driver_license,
    avatar,
    id
  }) {
    const user = this.repository.create({
      name,
      password,
      email,
      driver_license,
      avatar,
      id
    });
    await this.repository.save(user);
  }
  async findByEmail(email) {
    const user = await this.repository.findOne({
      where: {
        email
      }
    });
    return user;
  }
  async findById(id) {
    const user = await this.repository.findOne({
      where: {
        id
      }
    });
    return user;
  }
}
exports.UserRepository = UserRepository;