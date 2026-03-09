import express from "express";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

// This is used to parse JSON in request body
app.use(express.json());

app.listen(3000, () => {
    console.log("Listening on port 3000");
})

// All routes are defined here
app.use("/api", routes);

// Use generic error handler
app.use(errorHandler);