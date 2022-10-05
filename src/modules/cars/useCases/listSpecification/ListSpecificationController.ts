import { Request, Response } from "express";

import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

export class ListSpecificationController {
  constructor(private lisSpecificationUseCase: ListSpecificationUseCase) {}

  handle(req: Request, res: Response): Response {
    const allSpecifications = this.lisSpecificationUseCase.execute();

    return res.json(allSpecifications);
  }
}
