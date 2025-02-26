import "reflect-metadata";

// server/server.ts
import express, { Application } from "express";

import cors from "cors";
import dotenv from "dotenv";
import router from "./src/routes";

// Load environment variables
dotenv.config({ path: __dirname + "/.env" });

// Route test
const app: Application = express();

const PORT = process.env.PORT || 4000;
const ENDPOINT_PREFIX = process.env.API_ENDPOINT_PREFIX || "/api";

app.use(cors());
app.use(express.json());

// Route test
app.use(ENDPOINT_PREFIX, router);

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
