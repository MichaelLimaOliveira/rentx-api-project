"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarRepository = void 0;
var _typeorm = require("typeorm");
var _Car = require("../entities/Car");
class CarRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Car.Car);
  }
  async create({
    name,
    description,
    license_plate,
    daily_rate,
    fine_amount,
    brand,
    category_id,
    specifications,
    id
  }) {
    const car = this.repository.create({
      name,
      description,
      license_plate,
      daily_rate,
      fine_amount,
      brand,
      category_id,
      specifications,
      id
    });
    await this.repository.save(car);
    return car;
  }
  async findByLicensePlate(license_plate) {
    const car = await this.repository.findOne({
      where: {
        license_plate
      }
    });
    return car;
  }
  async findAvailable(brand, category_id, name) {
    const carQuery = await this.repository.createQueryBuilder("c").where("c.available = :available", {
      available: true
    });
    if (brand) {
      carQuery.andWhere("c.brand = :brand", {
        brand
      });
    }
    if (name) {
      carQuery.andWhere("c.name = :name", {
        name
      });
    }
    if (category_id) {
      carQuery.andWhere("c.category_id = :category_id", {
        category_id
      });
    }
    const cars = await carQuery.getMany();
    return cars;
  }
  async findById(car_id) {
    const car = await this.repository.findOne({
      where: {
        id: car_id
      }
    });
    return car;
  }
  async updateAvailable(id, available) {
    await this.repository.createQueryBuilder().update().set({
      available
    }).where("id = :id").setParameters({
      id
    }).execute();
  }
}
exports.CarRepository = CarRepository;