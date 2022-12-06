"use strict";

var _CarsRepositoryInMemory = require("../../repositories/in-memory/CarsRepositoryInMemory");
var _SpecificationsRepositoryInMemory = require("../../repositories/in-memory/SpecificationsRepositoryInMemory");
var _AppError = require("../../../../shared/errors/AppError");
var _CreateCarSpecificationUseCase = require("./CreateCarSpecificationUseCase");
let createCarSpecificationUseCase;
let carRepositoryInMemory;
let specificationRepositoryInMemory;
describe("Create car specification", () => {
  beforeEach(() => {
    carRepositoryInMemory = new _CarsRepositoryInMemory.CarsRepositoryInMemory();
    specificationRepositoryInMemory = new _SpecificationsRepositoryInMemory.SpecificationsRepositoryInMemory();
    createCarSpecificationUseCase = new _CreateCarSpecificationUseCase.CreateCarSpecificationUseCase(carRepositoryInMemory, specificationRepositoryInMemory);
  });
  it("Should not be able to add a new specification to a non existent car", async () => {
    const specification_id = ["4321"];
    const car_id = "1234";
    await expect(createCarSpecificationUseCase.execute({
      car_id,
      specification_id
    })).rejects.toEqual(new _AppError.AppError("Car does not exists!"));
  });
  it("Shold be able to add a new specification to the car", async () => {
    const car = await carRepositoryInMemory.create({
      name: "Frde",
      description: "description",
      daily_rate: 100,
      license_plate: "abc-1234",
      fine_amount: 60,
      brand: "brand",
      category_id: "category"
    });
    const specification = await specificationRepositoryInMemory.create({
      description: "test",
      name: "teste"
    });
    const specification_id = [specification.id];
    const specificationsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specification_id
    });
    expect(specificationsCars).toHaveProperty("specifications");
    expect(specificationsCars.specifications.length).toBe(1);
  });
});