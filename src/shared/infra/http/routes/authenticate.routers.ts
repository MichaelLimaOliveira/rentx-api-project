import { Router } from "express";

import { AuthenticateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";

export const authenticateRouters = Router();
const authenticateUserController = new AuthenticateUserController();

authenticateRouters.post("/sessions", authenticateUserController.hanlde);
