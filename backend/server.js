const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();
const { errorHandler } = require('./middleware/errorHandlerMiddleware');

app.use(express.json()); //body parser for JSON
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/employees', require('./routes/employees.router'));

// error handler middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port: ${port}`));
