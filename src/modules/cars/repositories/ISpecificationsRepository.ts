import { Specification } from "../model/specification";

export interface ICreateSpecificatioDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificatioDTO): void;
  list(): Specification[];
  findByName(name: string): Specification;
}
