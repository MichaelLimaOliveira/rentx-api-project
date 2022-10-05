import { Specification } from "../../model/specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

export class ListSpecificationUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}
  execute(): Specification[] {
    const specifications = this.specificationsRepository.list();

    return specifications;
  }
}
