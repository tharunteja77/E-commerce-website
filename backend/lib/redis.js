import Redis from "ioredis";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("./backend/.env") });

// console.log("REDIS_URL:", process.env.UPSTASH_REDIS_URL);

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);
