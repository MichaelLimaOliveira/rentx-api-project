"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAuthenticated = ensureAuthenticated;
var _jsonwebtoken = require("jsonwebtoken");
var _auth = _interopRequireDefault(require("../../../../config/auth"));
var _AppError = require("../../../errors/AppError");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new _AppError.AppError("Token missing!", 401);
  }
  const [, token] = authHeader.split(" ");
  try {
    const {
      sub: user_id
    } = (0, _jsonwebtoken.verify)(token, _auth.default.secret_token);
    req.user = {
      id: user_id
    };
    next();
  } catch (error) {
    throw new _AppError.AppError("Invalid token!", 401);
  }
}