import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("IUsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) throw new AppError("User already exists");

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
      avatar,
    });
  }
}
