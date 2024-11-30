const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json()); // JSON request handling

// Database Connection
const db = mysql.createConnection({
  host: "localhost", // Localhost for local setup
  user: "root", // Default MySQL username
  password: "", // Default MySQL password (blank by default)
  database: "bigshow_db", // Your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to database!");
});

// Sign Up Endpoint
app.post("/signup", (req, res) => {
  const { name, email, number, password, gender } = req.body;

  const query =
    "INSERT INTO bigshow (name, email, number, password, gender) VALUES (?, ?, ?, ?, ?)";
  db.query(query, [name, email, number, password, gender], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: "User registered successfully!" });
    }
  });
});

// Sign In Endpoint
app.post("/signin", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM bigshow WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.length > 0) {
      res.status(200).json({ message: "Login successful!", user: result[0] });
    } else {
      res.status(401).json({ message: "Invalid email or password!" });
    }
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
