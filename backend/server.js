const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();
const { errorHandler } = require('./middleware/errorHandler');

// middleware to receive req.body data instead of returning undefined
app.use(express.json()); //body parser for JSON
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/employees', require('./routes/employeeRoutes'));

// error handler middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port: ${port}`));
