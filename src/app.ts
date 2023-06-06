import express, { Express, Request, Response, NextFunction } from "express";

const app: Express = express();

const PORT = process.env.PORT ?? 8080;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
