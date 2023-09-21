import express, { Application, NextFunction, Request, Response } from "express";
import connectDB from "./helpers/db";
import usersRouter from "./router/users";

const app: Application = express();

connectDB();

app.use(express.json());
app.use("/users", usersRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Express server with TypeScript");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
