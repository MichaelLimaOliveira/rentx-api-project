"use strict";

var _tsyringe = require("tsyringe");
var _DayjsDateProvider = require("./implementations/DayjsDateProvider");
_tsyringe.container.registerSingleton("IDateProvider", _DayjsDateProvider.DayjsDateProvider);