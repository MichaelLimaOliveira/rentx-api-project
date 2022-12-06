"use strict";

var _UserRepositoryInMemory = require("../../repositories/in-memory/UserRepositoryInMemory");
var _UsersTokensRepositoryInMemory = require("../../repositories/in-memory/UsersTokensRepositoryInMemory");
var _DayjsDateProvider = require("../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider");
var _MailProviderInMemory = require("../../../../shared/container/providers/MailProvider/in-memory/MailProviderInMemory");
var _AppError = require("../../../../shared/errors/AppError");
var _SendForgotPasswordMailUseCase = require("./SendForgotPasswordMailUseCase");
let sendForgotPasswordMailUseCase;
let userRepositoryInMemory;
let usersTokensRepositoryInMemory;
let dateProvider;
let mailProviderInMemory;
describe("Send forgot mail", () => {
  beforeEach(() => {
    userRepositoryInMemory = new _UserRepositoryInMemory.UserRepositoryInMemory();
    usersTokensRepositoryInMemory = new _UsersTokensRepositoryInMemory.UsersTokensRepositoryInMemory();
    dateProvider = new _DayjsDateProvider.DayjsDateProvider();
    mailProviderInMemory = new _MailProviderInMemory.MailProviderInMemory();
    sendForgotPasswordMailUseCase = new _SendForgotPasswordMailUseCase.SendForgotPasswordMailUseCase(userRepositoryInMemory, usersTokensRepositoryInMemory, dateProvider, mailProviderInMemory);
  });
  it("Should be able to send a forgot password mail to user", async () => {
    const sendMail = jest.spyOn(mailProviderInMemory, "sendMail");
    await userRepositoryInMemory.create({
      driver_license: "77967796",
      email: "alexandre@osk.com",
      name: "Alexandre",
      password: "12345"
    });
    await sendForgotPasswordMailUseCase.execute("alexandre@osk.com");
    expect(sendMail).toHaveBeenCalled();
  });
  it("Should not be able to send email if user does not exists", async () => {
    await expect(sendForgotPasswordMailUseCase.execute("fake@mail.com.br")).rejects.toEqual(new _AppError.AppError("User does not exists!"));
  });
  it("Should be able to create an users token", async () => {
    const generateTokenMail = jest.spyOn(usersTokensRepositoryInMemory, "create");
    await userRepositoryInMemory.create({
      driver_license: "779677962",
      email: "alexandre2@osk.com",
      name: "Alexandre2",
      password: "123452"
    });
    await sendForgotPasswordMailUseCase.execute("alexandre2@osk.com");
    expect(generateTokenMail).toHaveBeenCalled();
  });
});