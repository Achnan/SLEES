const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "passwords",
  database: "stock",
  port:"3307"
});

app.get("/stock", (req, res) => {
  db.query("SELECT * FROM stock", (err, result) => {
    if (err) {
      console.error("Error retrieving data:", err);
      res.status(500).send("Error retrieving data" + err.message);
    } else {
      res.send(result);
    }
  });
});

app.post("/create", (req, res) => {
  const { name } = req.body;
  db.query("INSERT INTO stock (name) VALUES (?)", [name], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error adding stock");
    } else {
      res.send({ id: result.insertId, name });
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM stock WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting stock");
    } else {
      res.send("Stock deleted");
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
