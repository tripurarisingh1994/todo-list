import { createPool, Pool } from 'mysql2/promise';

const pool: Pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'todo_list',
  connectionLimit: 10, // Adjust the connection limit as per your requirements
});

export default pool;

