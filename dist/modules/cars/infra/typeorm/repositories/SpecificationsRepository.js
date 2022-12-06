"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecificationsRepository = void 0;
var _typeorm = require("typeorm");
var _specification = require("../entities/specification");
class SpecificationsRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_specification.Specification);
  }
  async create({
    name,
    description
  }) {
    const specification = this.repository.create({
      name,
      description
    });
    await this.repository.save(specification);
    return specification;
  }
  async list() {
    const specifications = await this.repository.find();
    return specifications;
  }
  async findByName(name) {
    const specification = await this.repository.findOne({
      where: {
        name
      }
    });
    return specification;
  }
  async findByIds(ids) {
    const specifications = await this.repository.findByIds(ids);
    return specifications;
  }
}
exports.SpecificationsRepository = SpecificationsRepository;