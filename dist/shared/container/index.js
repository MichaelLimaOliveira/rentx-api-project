"use strict";

var _tsyringe = require("tsyringe");
require("./providers");
var _UsersRepository = require("../../modules/accounts/infra/typeorm/repositories/UsersRepository");
var _UsersTokensRepository = require("../../modules/accounts/infra/typeorm/repositories/UsersTokensRepository");
var _CarReposytory = require("../../modules/cars/infra/typeorm/repositories/CarReposytory");
var _CarsImagesRepository = require("../../modules/cars/infra/typeorm/repositories/CarsImagesRepository");
var _CategoriesRepository = require("../../modules/cars/infra/typeorm/repositories/CategoriesRepository");
var _SpecificationsRepository = require("../../modules/cars/infra/typeorm/repositories/SpecificationsRepository");
var _RentalRepository = require("../../modules/rentals/infra/typeorm/repositories/RentalRepository");
_tsyringe.container.registerSingleton("ICategoriesRepository", _CategoriesRepository.CategoriesRepository);
_tsyringe.container.registerSingleton("ISpecificationsRepository", _SpecificationsRepository.SpecificationsRepository);
_tsyringe.container.registerSingleton("IUsersRepository", _UsersRepository.UserRepository);
_tsyringe.container.registerSingleton("ICarsRepository", _CarReposytory.CarRepository);
_tsyringe.container.registerSingleton("ICarsImagesRepository", _CarsImagesRepository.CarsImagesRepository);
_tsyringe.container.registerSingleton("IRentalsRepository", _RentalRepository.RentalRepository);
_tsyringe.container.registerSingleton("IUsersTokensRepository", _UsersTokensRepository.UsersTokensRepository);