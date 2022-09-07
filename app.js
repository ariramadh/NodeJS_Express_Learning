const express = require('express')
const app = express()
const path = require('path');
const port = 3000
const jsonToTable = require('json-to-table'); 
const { result } = require('lodash');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
  });

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user1'
})

connection.connect()

//open();
// add('Yesi','Komalasari','1207')
// open()
// del(1207)
// open()

function open(){
    connection.query('SELECT * FROM student', (err, result, fields) => {
        if (err) throw err;
      //   console.log(result);
        console.log(jsonToTable(result));
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

      });

      return result();
}

function add(fname,lname,id_number){
    var sql = "INSERT INTO student (fname, lname, id_number) VALUES (?)"
    connection.query(sql, [[fname, lname, id_number]], (err, result, fields) => {
        if (err) throw err;
            console.log("Insert success!!");
      })    
}

function del(id_number){
    connection.query('DELETE FROM student WHERE id_number =  ?', id_number, (err, result, fields) => {
        if (err) throw err;
            console.log("Delete success!!");
      })
}

connection.end()
