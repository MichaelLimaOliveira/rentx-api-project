"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepositoryInMemory = void 0;
var _user = require("../../infra/typeorm/entities/user");
class UserRepositoryInMemory {
  constructor() {
    this.users = [];
  }
  async create(data) {
    const user = new _user.User();
    Object.assign(user, {
      name: data.name,
      password: data.password,
      email: data.email,
      driver_license: data.driver_license
    });
    this.users.push(user);
  }
  async findByEmail(email) {
    const user = this.users.find(user => user.email === email);
    return user;
  }
  async findById(user_id) {
    const user = this.users.find(user => user.id === user_id);
    return user;
  }
}
exports.UserRepositoryInMemory = UserRepositoryInMemory;