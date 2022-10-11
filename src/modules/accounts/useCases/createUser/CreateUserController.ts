import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    const createUserUseCse = container.resolve(CreateUserUseCase);
    await createUserUseCse.execute(data);

    return res.status(201).send();
  }
}
