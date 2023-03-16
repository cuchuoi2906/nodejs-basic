// get the client
import mysql from "mysql2/promise";

console.log('create the connect to DB');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
})

// simple query
export default pool;