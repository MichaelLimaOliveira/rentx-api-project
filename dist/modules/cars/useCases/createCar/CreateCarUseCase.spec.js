"use strict";

var _CarsRepositoryInMemory = require("../../repositories/in-memory/CarsRepositoryInMemory");
var _AppError = require("../../../../shared/errors/AppError");
var _CreateCarUseCase = require("./CreateCarUseCase");
let createCarUseCase;
let carRepositoryInMemory;
describe("Create Car", () => {
  beforeEach(() => {
    carRepositoryInMemory = new _CarsRepositoryInMemory.CarsRepositoryInMemory();
    createCarUseCase = new _CreateCarUseCase.CreateCarUseCase(carRepositoryInMemory);
  });
  it("Shold be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Frde",
      description: "description",
      daily_rate: 100,
      license_plate: "abc-1234",
      fine_amount: 60,
      brand: "brand",
      category_id: "category"
    });
    expect(car).toHaveProperty("id");
    expect(car).toHaveProperty("created_at");
    expect(car).toHaveProperty("available");
  });
  it("Shold not be able to create a car with exists license plate", async () => {
    const car = {
      name: "Frde",
      description: "description",
      daily_rate: 100,
      license_plate: "abc-1234",
      fine_amount: 60,
      brand: "brand",
      category_id: "category"
    };
    const car2 = {
      name: "Onix",
      description: "description2",
      daily_rate: 102,
      license_plate: "abc-1234",
      fine_amount: 62,
      brand: "brand2",
      category_id: "category2"
    };
    await createCarUseCase.execute(car);
    await expect(createCarUseCase.execute(car2)).rejects.toEqual(new _AppError.AppError("Car already exists"));
  });
  it("shold not be able to create a car with available true by default", async () => {
    const car = {
      name: "Forde",
      description: "description",
      daily_rate: 100,
      license_plate: "abc-4321",
      fine_amount: 60,
      brand: "brand",
      category_id: "category"
    };
    const createdCar = await createCarUseCase.execute(car);
    expect(createdCar.available).toBe(true);
  });
});