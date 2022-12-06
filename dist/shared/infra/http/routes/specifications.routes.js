"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specificationsRoutes = void 0;
var _express = require("express");
var _CreateSpecificationController = require("../../../../modules/cars/useCases/createSpecification/CreateSpecificationController");
var _ListSpecificationController = require("../../../../modules/cars/useCases/listSpecification/ListSpecificationController");
var _ensureAdmin = require("../middlewares/ensureAdmin");
var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const specificationsRoutes = (0, _express.Router)();
exports.specificationsRoutes = specificationsRoutes;
const createSpecificationController = new _CreateSpecificationController.CreateSpecificationController();
const listSpecificationController = new _ListSpecificationController.ListSpecificationController();
specificationsRoutes.post("/", _ensureAuthenticated.ensureAuthenticated, _ensureAdmin.ensureAdmin, createSpecificationController.handle);
specificationsRoutes.get("/", _ensureAuthenticated.ensureAuthenticated, listSpecificationController.handle);