import Stripe from "stripe";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("./backend/.env") });

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
