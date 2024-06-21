const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

// Initialize Express app
const app = express();
const port = 5000;

// Create a PostgreSQL pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tech',
  password: '12345678',
  port: 5432,
});

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Route to handle form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, company, country, code } = req.body;

  console.log('Received data:', req.body); // Log received data

  try {
    // Insert form data into PostgreSQL database
    const query = 'INSERT INTO form(name, email, company, country, code) VALUES ($1, $2, $3, $4, $5)';
    await pool.query(query, [name, email, company, country, code]);

    // Send success response
    res.status(200).json({ message: 'Form submission successful' });
  } catch (error) {
    // Log error and send error response
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
