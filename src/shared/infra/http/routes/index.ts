import express from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { carRoutes } from "./car.routes";
import { categoriesRoutes } from "./categories.routes";
import { passwordRoutes } from "./password.route";
import { rentalRoutes } from "./rental.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRouters } from "./users.routes";

export const router = express();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRouters);
router.use("/cars", carRoutes);
router.use(authenticateRoutes);
router.use("/rentals", rentalRoutes);
router.use("/password", passwordRoutes);
