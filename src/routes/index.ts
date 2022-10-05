import express from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

export const router = express();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
