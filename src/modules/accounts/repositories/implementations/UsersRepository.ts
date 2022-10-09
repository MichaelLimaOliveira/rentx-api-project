import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/user";
import { ICreateUsersDTO, IUsersRepository } from "../IUsersRepository";

export class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(data: ICreateUsersDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
