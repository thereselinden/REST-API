const jsonData = require('../employees.json');

// GET all employees
const getEmployees = async (req, res) => {
  res.send('Hello from All Employees route');
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
