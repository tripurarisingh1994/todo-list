import express, {Request, Response, Router} from 'express';
const route: Router = express.Router();
import pool from '../db';
import { ResultSetHeader } from 'mysql2';


route.post('/save', async (req: Request, res: Response) => {
    try {
        const {taskName, description, user_id} = req.body;

        const [result] = await pool.execute(
            'Insert into task (taskName, description, user_id) Values (?,?,?)',
            [taskName, description, user_id]
        )
        
        if('affectedRows' in result && 'insertId' in result) {
            if((result as ResultSetHeader).affectedRows === 1) {
                res.status(201).json({ success: true, message: "inserted successfully"})
            }
            else {
                res.status(200).json({ success: false, message: "insertion failed"})
            }
        }        

      } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      finally {
        pool.end();
      }
})

export default route;