import express from "express";

import { authenticateRouters } from "./authenticate.routers";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRouters } from "./users.routes";

export const router = express();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRouters);
router.use(authenticateRouters);
