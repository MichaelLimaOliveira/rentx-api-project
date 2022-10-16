import { inject, injectable } from "tsyringe";

import { Specification } from "@modules/cars/infra/typeorm/entities/specification";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";

@injectable()
export class ListSpecificationUseCase {
  constructor(
    @inject("ISpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}
  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationsRepository.list();

    return specifications;
  }
}
