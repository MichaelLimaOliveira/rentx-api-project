"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListAvailableCarsUseCase = void 0;
var _tsyringe = require("tsyringe");
var _ICarsRepository = require("../../repositories/ICarsRepository");
var _dec, _dec2, _dec3, _dec4, _class;
let ListAvailableCarsUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ICarsRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICarsRepository.ICarsRepository === "undefined" ? Object : _ICarsRepository.ICarsRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListAvailableCarsUseCase {
  constructor(carRepository) {
    this.carRepository = carRepository;
  }
  async execute({
    brand,
    category_id,
    name
  }) {
    const cars = await this.carRepository.findAvailable(brand, category_id, name);
    return cars;
  }
}) || _class) || _class) || _class) || _class);
exports.ListAvailableCarsUseCase = ListAvailableCarsUseCase;