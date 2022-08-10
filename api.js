const client = require("./connection.js");
const express = require("express");
require("dotenv").config();
var cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
app.listen(process.env.PORT || 5500, () => {
  console.log("Sever is now listening at port 3300");
});

client.connect();

app.get("/users", (req, res) => {
  client.query(`Select * from users ORDER BY id DESC`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

app.post("/users", (req, res) => {
  const user = req.body;
  var insertQuery = `insert into users(fro, too, body, time)
  values('${user.fro}', '${user.too}', '${user.body}', '${user.time}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// const client = require("./connection.js");
// const express = require("express");
// require("dotenv").config()
// var cors = require("cors");
// const app = express();
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(cors());
// app.listen(process.env.PORT||5500, () => {
//   console.log("Sever is now listening at port 3300");
// });

// client.connect();

// app.get("/users", (req, res) => {
//   client.query(`Select * from users ORDER BY id DESC`, (err, result) => {
//     if (!err) {
//       res.send(result.rows);
//     }
//   });
//   client.end;
// });

// app.post("/users", (req, res) => {
//   const user = req.body;
//   let insertQuery = `insert into users(fro, too, body, time)
//                      values('${user.fro}', '${user.too}', '${user.body}', '${user.time}')`;

//   client.query(insertQuery, (err, result) => {
//     if (!err) {
//       res.send("Insertion was successful");
//     } else {
//       console.log(err.message);
//     }
//   });
//   client.end;
// });
