import express, {Express} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.use(express.json())

import userRoute from './routes/userRoute';
import taskRoute from './routes/taskRoute';


const port = process.env.PORT || 3000

app.use('/user', userRoute);
app.use('/task', taskRoute);


app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))
