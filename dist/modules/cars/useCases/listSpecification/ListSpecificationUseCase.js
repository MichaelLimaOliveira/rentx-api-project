"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSpecificationUseCase = void 0;
var _tsyringe = require("tsyringe");
var _ISpecificationsRepository = require("../../repositories/ISpecificationsRepository");
var _dec, _dec2, _dec3, _dec4, _class;
let ListSpecificationUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ISpecificationsRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ISpecificationsRepository.ISpecificationsRepository === "undefined" ? Object : _ISpecificationsRepository.ISpecificationsRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListSpecificationUseCase {
  constructor(specificationsRepository) {
    this.specificationsRepository = specificationsRepository;
  }
  async execute() {
    const specifications = await this.specificationsRepository.list();
    return specifications;
  }
}) || _class) || _class) || _class) || _class);
exports.ListSpecificationUseCase = ListSpecificationUseCase;