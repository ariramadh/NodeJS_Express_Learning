const express = require('express')
const app = express()
const port = 3000
const jsonToTable = require('json-to-table'); 

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user1'
})

connection.connect()

function open(){
    var sql = "INSERT INTO student (id, fname, lname, id_number) VALUES ('6', 'Ari', 'Ramadhani', '2021')"
    connection.query(sql, (err, result, fields) => {
        if (err) throw err;
            console.log("Insert success!!");
      })    
}

function open(){
    connection.query('SELECT * FROM student', (err, result, fields) => {
        if (err) throw err;
      //   console.log(result);
        console.log(jsonToTable(result));
      })
}

connection.end()
