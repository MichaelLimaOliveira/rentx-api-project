"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;
require("reflect-metadata");
require("dotenv/config");
var _express = _interopRequireDefault(require("express"));
require("express-async-errors");
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
require("../../container");
var _upload = _interopRequireDefault(require("../../../config/upload"));
var _AppError = require("../../errors/AppError");
var _typeorm = _interopRequireDefault(require("../typeorm"));
var _swagger = _interopRequireDefault(require("../../../swagger.json"));
var _routes = require("./routes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _typeorm.default)();
const app = (0, _express.default)();
exports.app = app;
app.use(_express.default.json());
app.use("/api-docs", _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.default));
app.use("avatar", _express.default.static(`${_upload.default.tmpFolder}/avatar`));
app.use("cars", _express.default.static(`${_upload.default.tmpFolder}/cars`));
app.use(_routes.router);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, next) => {
  if (err instanceof _AppError.AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    });
  }
  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  });
});