require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Connect to your database
const pool = new Pool({
  connectionString: process.env.DATABASE_CONNECTION + "?sslmode=require",
});

// Registration endpoint
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user already exists
    const userExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (userExists.rows.length) {
      return res.status(409).send("User already exists.");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new user into database
    const newUser = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, hashedPassword]
    );

    // Omit the password in the response
    const { password: _, ...userData } = newUser.rows[0];

    res.status(201).json(userData);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Retrieve user from database
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).send("Invalid credentials.");
    }

    // Compare password
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(401).send("Invalid credentials.");
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

app.get("/test", (req, res) => {
  res.status(200).send("success");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
