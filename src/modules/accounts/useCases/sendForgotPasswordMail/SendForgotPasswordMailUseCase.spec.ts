import { UserRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UserRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";

import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let mailProviderInMemory: MailProviderInMemory;

describe("Send forgot mail", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    mailProviderInMemory = new MailProviderInMemory();
    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      userRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProviderInMemory
    );
  });

  it("Should be able to send a forgot password mail to user", async () => {
    const sendMail = jest.spyOn(mailProviderInMemory, "sendMail");

    await userRepositoryInMemory.create({
      driver_license: "77967796",
      email: "alexandre@osk.com",
      name: "Alexandre",
      password: "12345",
    });

    await sendForgotPasswordMailUseCase.execute("alexandre@osk.com");

    expect(sendMail).toHaveBeenCalled();
  });

  it("Should not be able to send email if user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("fake@mail.com.br")
    ).rejects.toEqual(new AppError("User does not exists!"));
  });

  it("Should be able to create an users token", async () => {
    const generateTokenMail = jest.spyOn(
      usersTokensRepositoryInMemory,
      "create"
    );

    await userRepositoryInMemory.create({
      driver_license: "779677962",
      email: "alexandre2@osk.com",
      name: "Alexandre2",
      password: "123452",
    });

    await sendForgotPasswordMailUseCase.execute("alexandre2@osk.com");
    expect(generateTokenMail).toHaveBeenCalled();
  });
});
