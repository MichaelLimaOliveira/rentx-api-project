import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/user";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(user_id: string): Promise<User>;
}
