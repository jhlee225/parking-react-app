var express = require("express");
var router = express.Router();
var mysql = require("mysql");

/* GET */

/* POST */
router.post("/", function (req, res) {
  const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "JH",
    password: "102938a",
    database: "parking_db",
    dateStrings: "date",
  });
  connection.connect();

  connection.query(
    `insert into cars value(0,"${req.body.title}",now(),null);`,
    function (err, rows, fields) {
      res.send("OK");
    }
  );
  connection.end();
});
module.exports = router;
