import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import express, { Response, Request, NextFunction } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "@shared/container";
import upload from "@config/upload";
import { AppError } from "@shared/errors/AppError";
import rateLimiter from "@shared/infra/http/middlewares/rateLimiter";
import createConnection from "@shared/infra/typeorm";

import swaggerFile from "../../../swagger.json";
import { router } from "./routes";

createConnection();
const app = express();

app.use(express.json());
app.use(rateLimiter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("avatar", express.static(`${upload.tmpFolder}/avatar`));
app.use("cars", express.static(`${upload.tmpFolder}/cars`));

app.use(cors());
app.use(router);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

export { app };
