import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./helpers/db";
import usersRouter from "./router/users";
import productsRouter from "./router/products";
import checkoutRouter from "./router/checkout";

const app: Application = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));

app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/checkout", checkoutRouter);

app.get("/api", (req: Request, res: Response, next: NextFunction) => {
  res.send("Express server with TypeScript");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
