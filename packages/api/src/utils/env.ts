import path from "path";
import dotenv from "dotenv";

const envPath = path.resolve(process.cwd(), `.env${process.env.NODE_ENV !== "production" ? ".local" : ""}`);

dotenv.config({ path: envPath });
