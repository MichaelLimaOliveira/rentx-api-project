import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: CategoriesRepository
  ) {}
  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}
