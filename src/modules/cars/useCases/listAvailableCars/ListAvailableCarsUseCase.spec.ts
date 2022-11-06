import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carRepositoryInMemory: CarsRepositoryInMemory;
let listCarsUseCase: ListAvailableCarsUseCase;

describe("List Cars", () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListAvailableCarsUseCase(carRepositoryInMemory);
  });

  it("Should be able to list all available cars", async () => {
    const car = await carRepositoryInMemory.create({
      name: "Frde",
      description: "description",
      daily_rate: 100,
      license_plate: "abc-1234",
      fine_amount: 60,
      brand: "brand",
      category_id: "category",
    });

    const listCars = await listCarsUseCase.execute({});
    expect(listCars).toEqual([car]);
  });

  it("Should be able to list all available cars by name", async () => {
    const car = await carRepositoryInMemory.create({
      name: "Frde2",
      description: "description2",
      daily_rate: 120,
      license_plate: "abc-2234",
      fine_amount: 62,
      brand: "brand2",
      category_id: "category2",
    });

    const listCars = await listCarsUseCase.execute({
      name: car.name,
    });
    expect(listCars).toEqual([car]);
  });

  it("Shold be able to list all available cars by brand", async () => {
    const car = await carRepositoryInMemory.create({
      name: "Frde3",
      description: "description3",
      daily_rate: 123,
      license_plate: "abc-2233",
      fine_amount: 63,
      brand: "brand3",
      category_id: "category3",
    });

    const listCars = await listCarsUseCase.execute({
      brand: car.brand,
    });
    expect(listCars).toEqual([car]);
  });

  it("Shold be able to list all available cars by category", async () => {
    const car = await carRepositoryInMemory.create({
      name: "Frde4",
      description: "description4",
      daily_rate: 144,
      license_plate: "abc-4444",
      fine_amount: 64,
      brand: "brand4",
      category_id: "category4",
    });

    const listCars = await listCarsUseCase.execute({
      category_id: car.category_id,
    });
    expect(listCars).toEqual([car]);
  });
});
