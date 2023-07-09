import express, {Request, Response, Router} from 'express';
const route: Router = express.Router();

route.post('/save', (req: Request, res: Response) => {
    const data = req.body;
    console.log(data)
    res.send(data)
})

export default route;