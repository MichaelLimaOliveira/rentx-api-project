"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RentalRepository = void 0;
var _typeorm = require("typeorm");
var _Rental = require("../entities/Rental");
class RentalRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Rental.Rental);
  }
  async findOpenRentalById(car_id) {
    const openByCar = await this.repository.findOne({
      where: {
        car_id,
        end_date: null
      }
    });
    return openByCar;
  }
  async findOpenRentalByUser(user_id) {
    const openByUser = await this.repository.findOne({
      where: {
        user_id,
        end_date: null
      }
    });
    return openByUser;
  }
  async create({
    user_id,
    car_id,
    expected_return_date,
    id,
    end_date,
    total
  }) {
    const rental = this.repository.create({
      user_id,
      car_id,
      expected_return_date,
      id,
      end_date,
      total
    });
    await this.repository.save(rental);
    return rental;
  }
  async findById(id) {
    const rental = await this.repository.findOne({
      where: {
        id
      }
    });
    return rental;
  }
  async findByUser(user_id) {
    const rentalsByUser = await this.repository.find({
      where: {
        user_id
      },
      relations: ["car"]
    });
    return rentalsByUser;
  }
}
exports.RentalRepository = RentalRepository;