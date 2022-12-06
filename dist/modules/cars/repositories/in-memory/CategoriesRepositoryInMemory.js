"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesRepositoryInMemory = void 0;
var _category = require("../../infra/typeorm/entities/category");
class CategoriesRepositoryInMemory {
  constructor() {
    this.categories = [];
  }
  async create({
    name,
    description
  }) {
    const category = new _category.Category();
    Object.assign(category, {
      name,
      description
    });
    this.categories.push(category);
  }
  async list() {
    const list = this.categories;
    return list;
  }
  async findByName(name) {
    const categories = this.categories.find(category => category.name === name);
    return categories;
  }
}
exports.CategoriesRepositoryInMemory = CategoriesRepositoryInMemory;