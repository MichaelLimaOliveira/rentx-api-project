"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carRoutes = void 0;
var _express = require("express");
var _multer = _interopRequireDefault(require("multer"));
var _upload = _interopRequireDefault(require("../../../../config/upload"));
var _CreateCarController = require("../../../../modules/cars/useCases/createCar/CreateCarController");
var _CreateCarSpecificationController = require("../../../../modules/cars/useCases/createCarSpecification/CreateCarSpecificationController");
var _ListAvailableCarsController = require("../../../../modules/cars/useCases/listAvailableCars/ListAvailableCarsController");
var _UploadCarImagesController = require("../../../../modules/cars/useCases/uploadCarImages/UploadCarImagesController");
var _ensureAdmin = require("../middlewares/ensureAdmin");
var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const upload = (0, _multer.default)(_upload.default);
const carRoutes = (0, _express.Router)();
exports.carRoutes = carRoutes;
const createCarController = new _CreateCarController.CreateCarController();
const listAvailableCarsController = new _ListAvailableCarsController.ListAvailableCarsController();
const createCarSpecificationController = new _CreateCarSpecificationController.CreateCarSpecificationController();
const uploadCarImagesController = new _UploadCarImagesController.UploadCarImagesController();
carRoutes.post("/", _ensureAuthenticated.ensureAuthenticated, _ensureAdmin.ensureAdmin, createCarController.handle);
carRoutes.post("/specifications/:id", _ensureAuthenticated.ensureAuthenticated, _ensureAdmin.ensureAdmin, createCarSpecificationController.handle);
carRoutes.post("/images/:id", _ensureAuthenticated.ensureAuthenticated, _ensureAdmin.ensureAdmin, upload.array("images"), uploadCarImagesController.handle);
carRoutes.get("/available", listAvailableCarsController.handle);