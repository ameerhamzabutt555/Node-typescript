import express, { Request, Response } from 'express';
import userRoutes from './routes/index';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});


app.use('/api', userRoutes);


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
