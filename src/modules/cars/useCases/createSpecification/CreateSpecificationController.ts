import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    try {
      const createSpecificationUseCase = container.resolve(
        CreateSpecificationUseCase
      );
      await createSpecificationUseCase.execute({ name, description });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }

    return res.status(201).send();
  }
}
