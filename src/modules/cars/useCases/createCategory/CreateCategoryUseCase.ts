import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface ICategoryRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("ICategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}
  async execute({ name, description }: ICategoryRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists!", 400);
    }

    await this.categoriesRepository.create({ name, description });
  }
}
