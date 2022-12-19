const jsonData = require('../employees.json');
const fs = require('fs');

//https://blog.logrocket.com/error-handling-node-js/
const util = require('util');

const readFile = util.promisify(fs.readFile);
const dataPath = 'backend/employees.json';

// GET all employees
const getEmployees = async (req, res) => {
  try {
    const result = await readFile(dataPath);
    res.status(200).send(result);
  } catch (err) {
    res.status(400);
    throw new Error(`Error: ${err}`);
  }
};

const createEmployee = async (req, res) => {
  res.send('Hello from POST new Employee');
};

const updateEmployee = async (req, res) => {
  res.send('Hello from updating unique employee');
};

const deleteEmployee = async (req, res) => {
  res.send('Hello from deleteing unique employee');
};

module.exports = {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
