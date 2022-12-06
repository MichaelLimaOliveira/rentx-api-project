"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecificationsRepositoryInMemory = void 0;
var _specification = require("../../infra/typeorm/entities/specification");
class SpecificationsRepositoryInMemory {
  constructor() {
    this.specifications = [];
  }
  async create({
    name,
    description
  }) {
    const specification = new _specification.Specification();
    Object.assign(specification, {
      name,
      description
    });
    this.specifications.push(specification);
    return specification;
  }
  async list() {
    const listSpecifications = this.specifications;
    return listSpecifications;
  }
  async findByName(name) {
    const specification = this.specifications.find(specification => specification.name === name);
    return specification;
  }
  async findByIds(ids) {
    const allSpecifications = this.specifications.filter(specification => ids.includes(specification.id));
    return allSpecifications;
  }
}
exports.SpecificationsRepositoryInMemory = SpecificationsRepositoryInMemory;