const pg = require('pg');
const { Pool } = pg;

const pool = new Pool({
  user: process.env.POSTGRES_USER || 'default',
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST || 'localhost', // Replace with your actual PostgreSQL hostname or IP address
  port: process.env.POSTGRES_PORT || 5432, // Replace with your actual PostgreSQL port
  database: process.env.POSTGRES_DATABASE || 'verceldb',
  connectionString: process.env.POSTGRES_URL_NON_POOLING + "?sslmode=require", // Adjust this if needed
  ssl: { rejectUnauthorized: false }, // Add this line for self-signed certificates
});

module.exports = pool;
