import { NextFunction, Request, Response } from "express";
import { RateLimiterRedis } from "rate-limiter-flexible";
import * as redis from "redis";

import { AppError } from "@shared/errors/AppError";

const requestsQuantityPerSeconds = 10;
const requestsDurationInSecondsByIP = 5;

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const redisClient = redis.createClient({
    legacyMode: true,
    socket: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
    },
  });

  const limiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: "rateLimiter",
    points: requestsQuantityPerSeconds,
    duration: requestsDurationInSecondsByIP,
  });
  try {
    await limiter.consume(request.ip);
    return next();
  } catch (err) {
    throw new AppError(err.message, 429);
  }
}
