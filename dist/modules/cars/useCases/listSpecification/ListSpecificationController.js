"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSpecificationController = void 0;
var _tsyringe = require("tsyringe");
var _ListSpecificationUseCase = require("./ListSpecificationUseCase");
class ListSpecificationController {
  async handle(req, res) {
    const lisSpecificationUseCase = _tsyringe.container.resolve(_ListSpecificationUseCase.ListSpecificationUseCase);
    const allSpecifications = await lisSpecificationUseCase.execute();
    return res.json(allSpecifications);
  }
}
exports.ListSpecificationController = ListSpecificationController;