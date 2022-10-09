export interface ICreateUsersDTO {
  name: string;
  username: string;
  passaword: string;
  email: string;
  driver_license: string;
  avatar?: string;
}

export interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<void>;
}
