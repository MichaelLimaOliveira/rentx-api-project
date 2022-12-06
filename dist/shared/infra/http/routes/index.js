"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
var _express = _interopRequireDefault(require("express"));
var _authenticate = require("./authenticate.routes");
var _car = require("./car.routes");
var _categories = require("./categories.routes");
var _password = require("./password.route");
var _rental = require("./rental.routes");
var _specifications = require("./specifications.routes");
var _users = require("./users.routes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.default)();
exports.router = router;
router.use("/categories", _categories.categoriesRoutes);
router.use("/specifications", _specifications.specificationsRoutes);
router.use("/users", _users.usersRouters);
router.use("/cars", _car.carRoutes);
router.use(_authenticate.authenticateRoutes);
router.use("/rentals", _rental.rentalRoutes);
router.use("/password", _password.passwordRoutes);