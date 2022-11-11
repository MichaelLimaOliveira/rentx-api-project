import { ICreateUserTokenDTO } from "@modules/accounts/dtos/ICreateUserTokenDTO";
import { UsersTokens } from "@modules/accounts/infra/typeorm/entities/UsersTokens";

import { IUsersTokensRepository } from "../IUsersTokensRepository";

class UsersTokensRepositoryInMemory implements IUsersTokensRepository {
  usersTokens: UsersTokens[] = [];

  async create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDTO): Promise<UsersTokens> {
    const userToken = new UsersTokens();

    Object.assign(userToken, {
      expires_date,
      refresh_token,
      user_id,
    });

    this.usersTokens.push(userToken);

    return userToken;
  }

  async findByUsersIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UsersTokens> {
    const userToken = this.usersTokens.find(
      (userToken) =>
        userToken.user_id === user_id &&
        userToken.refresh_token === refresh_token
    );

    return userToken;
  }

  async deleteById(id: string): Promise<void> {
    const userToken = this.usersTokens.find((userToken) => userToken.id === id);
    this.usersTokens.splice(this.usersTokens.indexOf(userToken));
  }

  async findByRefreshToken(refresh_token: string): Promise<UsersTokens> {
    const userToken = this.usersTokens.find(
      (userToken) => userToken.refresh_token === refresh_token
    );

    return userToken;
  }
}

export { UsersTokensRepositoryInMemory };
