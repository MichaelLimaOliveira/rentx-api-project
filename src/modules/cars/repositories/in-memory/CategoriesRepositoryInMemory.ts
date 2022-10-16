import { Category } from "../../infra/typeorm/entities/category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

export class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }

  async list(): Promise<Category[]> {
    const list = this.categories;
    return list;
  }

  async findByName(name: string): Promise<Category> {
    const categories = this.categories.find(
      (category) => category.name === name
    );
    return categories;
  }
}
