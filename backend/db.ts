import {Connection, createConnection} from 'mysql2';

const con:Connection = createConnection({
  host:"localhost",
  user:"root",
  password:"12345678",
  database:"school"
});

module.exports = con;
