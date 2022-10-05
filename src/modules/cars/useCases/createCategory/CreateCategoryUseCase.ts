import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface ICategoryRequest {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ name, description }: ICategoryRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error("Category already exists!");

    this.categoriesRepository.create({ name, description });
  }
}
