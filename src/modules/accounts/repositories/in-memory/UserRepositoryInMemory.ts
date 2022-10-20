import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/user";

import { IUsersRepository } from "../IUsersRepository";

export class UserRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create(data: ICreateUserDTO): Promise<void> {
    const user = new User();
    Object.assign(user, {
      name: data.name,
      password: data.password,
      email: data.email,
      driver_license: data.driver_license,
    });

    this.users.push(user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
  async findById(user_id: string): Promise<User> {
    const user = this.users.find((user) => user.id === user_id);
    return user;
  }
}
