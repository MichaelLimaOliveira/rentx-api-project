import { inject, injectable } from "tsyringe";

import { Category } from "@modules/cars/infra/typeorm/entities/category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("ICategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}
  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}
