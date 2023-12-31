import express, { Request, Response, Router } from 'express';
const route: Router = express.Router();
import pool from '../db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';


route.post('/', async (req: Request, res: Response) => {
  try {
    const { taskName, description, user_id = 1 } = req.body;

    const [result] = await pool.execute(
      'Insert into task (taskName, description, user_id) Values (?,?,?)',
      [taskName, description, user_id]
    )

    if ('affectedRows' in result && 'insertId' in result) {
      if ((result as ResultSetHeader).affectedRows === 1) {

        const insertedTaskId = (result as ResultSetHeader).insertId;

        // Fetch the last inserted task using the insertedTaskId
        const [rows] = await pool.execute(
          'SELECT * FROM task WHERE id = ?',
          [insertedTaskId]
        );

        const insertedTask: RowDataPacket[] = rows as RowDataPacket[];

        res.status(201).json({ success: true, message: "inserted successfully", tasks: insertedTask })
      }
      else {
        res.status(200).json({ success: false, message: "insertion failed" })
      }
    }

  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

route.get('/', async (req: Request, res: Response) => {

  try {
    const [rows] = await pool.execute('Select * from task');

    const tasks: RowDataPacket[] = rows as RowDataPacket[];

    res.status(200).json({ success: true, tasks });

  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default route;