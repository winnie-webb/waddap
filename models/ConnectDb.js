const mysql = require("mysql2");

async function connectDb() {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "company",
  });
  const query = /*sql*/ `

  CREATE TABLE users(
    user_id VARCHAR(36) NOT NULL,
    username VARCHAR(30) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    dob DATE NOT NULL,
    
  )

  `;
  connection.query(query, (err, results, fields) => {
    console.log(results);
  });
}
module.exports = connectDb;
