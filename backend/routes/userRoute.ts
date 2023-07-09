import express, {Request, Response, Router} from 'express';
// import * as con from '../db'
import {Connection, createConnection, FieldPacket, OkPacket, QueryError} from "mysql2";

const route: Router = express.Router();

const con:Connection = createConnection({
  host:"localhost",
  user:"root",
  password:"12345678",
  database:"school"
});


route.post('/save', (req: Request, res:Response, next) => {
  const data = req.body;

  con.execute("Insert into User (name) Values (?)",
    [data.name],
    (err, result:OkPacket, fields)=>{
      if(err) {
        res.status(200).json({ success: false, message: err.toString()})
      }

      if(result && result.affectedRows === 1) {
        res.status(200).json({ success: true, message : "user created successfully"})
      }
    })

});

export default route;
