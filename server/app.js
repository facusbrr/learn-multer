import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "node:path";

import productRoute from "./src/routes/productRoute.js";

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(
  "/uploads",
  express.static(path.join(path.resolve(), "src", "uploads"))
);

// Routes
app.get("/", (req, res) => {
  res.json({ message: "hola" });
});

app.use("/", productRoute);

// Server
app.listen(PORT, () => {
  console.log(`Server corriendo en localhost:${PORT}`);
});
