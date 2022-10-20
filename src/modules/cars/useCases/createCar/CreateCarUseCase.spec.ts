import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

interface IRequestTest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

let createCarUseCase: CreateCarUseCase;
let carRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carRepositoryInMemory);
  });

  it("Shold be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Frde",
      description: "description",
      daily_rate: 100,
      license_plate: "abc-1234",
      fine_amount: 60,
      brand: "brand",
      category_id: "category",
    });
    expect(car).toHaveProperty("id");
    expect(car).toHaveProperty("created_at");
    expect(car).toHaveProperty("available");
  });

  it("Shold not be able to create a car with exists license plate", async () => {
    const car: IRequestTest = {
      name: "Frde",
      description: "description",
      daily_rate: 100,
      license_plate: "abc-1234",
      fine_amount: 60,
      brand: "brand",
      category_id: "category",
    };

    const car2: IRequestTest = {
      name: "Onix",
      description: "description2",
      daily_rate: 102,
      license_plate: "abc-1234",
      fine_amount: 62,
      brand: "brand2",
      category_id: "category2",
    };
    expect(async () => {
      await createCarUseCase.execute(car);
      await createCarUseCase.execute(car2);
    }).rejects.toBeInstanceOf(AppError);
  });

  it("shold not be able to create a car with available true by default", async () => {
    const car: IRequestTest = {
      name: "Forde",
      description: "description",
      daily_rate: 100,
      license_plate: "abc-4321",
      fine_amount: 60,
      brand: "brand",
      category_id: "category",
    };

    const createdCar = await createCarUseCase.execute(car);

    expect(createdCar.available).toBe(true);
  });
});
