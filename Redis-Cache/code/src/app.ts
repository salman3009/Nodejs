import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import todoRoutes from './routes/todos';

const app = express();

mongoose.connect("mongodb://localhost/todos").then(()=>{
  console.log("connnected");
}).catch(
  ()=>{
    console.log("failed");
});

app.use(json());

app.use('', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
