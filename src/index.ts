import express from "express";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

const app = express();

connectDB();

// This is used to parse JSON in request body
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

// All routes are defined here
app.use("/api", routes);

// Use generic error handler
app.use(errorHandler);