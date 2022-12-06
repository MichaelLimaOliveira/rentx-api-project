"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshTokenController = void 0;
var _tsyringe = require("tsyringe");
var _RefreshTokenUseCase = require("./RefreshTokenUseCase");
class RefreshTokenController {
  async handle(req, res) {
    const token = req.body.token || req.headers["x-accesss-token"] || req.query.token;
    const refreshTokenUseCase = _tsyringe.container.resolve(_RefreshTokenUseCase.RefreshTokenUseCase);
    const refresh_token = await refreshTokenUseCase.execute(token);
    return res.json(refresh_token);
  }
}
exports.RefreshTokenController = RefreshTokenController;