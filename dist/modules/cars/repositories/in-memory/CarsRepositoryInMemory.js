"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarsRepositoryInMemory = void 0;
var _Car = require("../../infra/typeorm/entities/Car");
class CarsRepositoryInMemory {
  constructor() {
    this.cars = [];
  }
  async create({
    name,
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    specifications
  }) {
    const car = new _Car.Car();
    Object.assign(car, {
      name,
      description,
      daily_rate,
      fine_amount,
      license_plate,
      category_id,
      brand,
      specifications
    });
    this.cars.push(car);
    return car;
  }
  async findByLicensePlate(license_plate) {
    const car = this.cars.find(car => car.license_plate === license_plate);
    return car;
  }
  async findAvailable(brand, category_id, name) {
    const availableCars = this.cars.filter(car => {
      if (car.available === true || brand && car.brand === brand || category_id && car.category_id === category_id || name && car.name === name) {
        return car;
      }
      return null;
    });
    return availableCars;
  }
  async findById(car_id) {
    const car = this.cars.find(car => car.id === car_id);
    return car;
  }
  async updateAvailable(id, available) {
    const findIndex = this.cars.findIndex(car => car.id === id);
    this.cars[findIndex].available = available;
  }
}
exports.CarsRepositoryInMemory = CarsRepositoryInMemory;