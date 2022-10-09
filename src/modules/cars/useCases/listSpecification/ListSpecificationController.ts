import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

export class ListSpecificationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const lisSpecificationUseCase = container.resolve(ListSpecificationUseCase);
    const allSpecifications = await lisSpecificationUseCase.execute();

    return res.json(allSpecifications);
  }
}
