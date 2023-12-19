// auth.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../src/db");

// Test database connection endpoint
router.get("/test", async (req, res) => {
    try {
      // Test the database connection by querying a simple table
      const result = await pool.query("SELECT 'Database connection test' AS test");
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error("Error during database connection test:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  
// Register endpoint
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into the database
    const result = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
      [username, hashedPassword]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Login endpoint
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Retrieve user from the database
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    if (result.rows.length === 0) {
      return res.status(401).send("Invalid credentials");
    }

    // Compare the provided password with the stored hashed password
    const isValidPassword = await bcrypt.compare(
      password,
      result.rows[0].password
    );

    if (!isValidPassword) {
      return res.status(401).send("Invalid credentials");
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
