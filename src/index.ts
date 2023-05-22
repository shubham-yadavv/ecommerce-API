import express, { Request, Response, Application } from 'express';
import Database from './config/database'
import UserRoutes from './routes/user.routes';
import config from './config';

const app: Application = express();

const mongodb = new Database();
mongodb.connect();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', new UserRoutes().router);

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello types!');
});

const port : number = config.port as number;
app.listen(port, (): void => {
  console.log('Server is running on port 3000');
});
