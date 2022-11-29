const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const pool = require('./db');

/* Middleware */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
/***************************************************/
/********************* Sign up *********************/
/***************************************************/
app.post('/users/signup', async(req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const email = req.body.email;
    const password = hashedPassword;
    
    const newUser = pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, password])
      /* If e-mail doesn't exist in database */
      .then(() => {
        res.status(201).json({ message: 'Sign up successful' });
      })
      /* If e-mail does exist in database */
      .catch (err => {
        if (err.code === '23505') { /* PostgreSQL error 23505 means unique_violation (https://www.postgresql.org/docs/current/errcodes-appendix.html) */
          res.status(409).json({ message: 'Email already exists in the database' });
        }
      });
  } catch {
    res.status(500).send();
  }
});

/* Set port and listen for requests */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});