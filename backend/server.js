const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();

// routes
app.use('/employees', require('./routes/employeeRoutes'));

app.listen(port, () => console.log(`Server running on port: ${port}`));
