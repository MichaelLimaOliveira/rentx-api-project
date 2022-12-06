"use strict";

var _UserRepositoryInMemory = require("../../repositories/in-memory/UserRepositoryInMemory");
var _UsersTokensRepositoryInMemory = require("../../repositories/in-memory/UsersTokensRepositoryInMemory");
var _DayjsDateProvider = require("../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider");
var _AppError = require("../../../../shared/errors/AppError");
var _CreateUserUseCase = require("../createUser/CreateUserUseCase");
var _AuthenticateUserUseCase = require("./AuthenticateUserUseCase");
let authenticateUserUseCase;
let createUserUseCase;
let usersTokensRepositoryInMemory;
let dateProvider;
let userRepositoryInMemory;
describe("Authenticate User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new _UserRepositoryInMemory.UserRepositoryInMemory();
    usersTokensRepositoryInMemory = new _UsersTokensRepositoryInMemory.UsersTokensRepositoryInMemory();
    dateProvider = new _DayjsDateProvider.DayjsDateProvider();
    authenticateUserUseCase = new _AuthenticateUserUseCase.AuthenticateUserUseCase(userRepositoryInMemory, usersTokensRepositoryInMemory, dateProvider);
    createUserUseCase = new _CreateUserUseCase.CreateUserUseCase(userRepositoryInMemory);
  });
  it("Should be able to authenticate an user", async () => {
    const user = {
      driver_license: "00123",
      email: "user@test.com",
      password: "1234",
      name: "user Test"
    };
    await createUserUseCase.execute(user);
    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    });
    expect(result).toHaveProperty("token");
  });
  it("Should not be able to authenticate an no existent user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "false@gmail.com",
        password: "1234"
      });
    }).rejects.toBeInstanceOf(_AppError.AppError);
  });
  it("Should not be able to authenticate with incorrect password", () => {
    expect(async () => {
      const user = {
        driver_license: "564561564",
        email: "user@user.com",
        password: "@kpdpsapio45ddadopUJdiwpçãsdjk2",
        name: "test user error"
      };
      await createUserUseCase.execute(user);
      await authenticateUserUseCase.execute({
        email: user.email,
        password: "false password"
      });
    }).rejects.toBeInstanceOf(_AppError.AppError);
  });
});