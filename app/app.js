import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import config from "config";
import TasksRoutes from "./routes/tasks.routes";

const app = express();

// settings
app.set("PORT", config.get("server.port"));

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// routes
app.get("/", (req, res) => {
  res.send({ message: "Welcome to my application" });
});

app.use("/api/tasks", TasksRoutes);

export default app;
