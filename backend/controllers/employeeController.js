//const jsonData = require('../data/employees.json');
const { v4: uuidv4 } = require('uuid');
//const fs = require('fs');
const fsPromises = require('fs').promises;

//const readFile = util.promisify(fs.readFile);
const dataPath = 'backend/data/employees.json';

// GET all employees
const getEmployees = async (req, res) => {
  try {
    const result = await fsPromises.readFile(dataPath, 'utf-8');
    const employees = JSON.parse(result);
    res.status(200).json(employees);
  } catch (err) {
    res.status(400);
    console.error(err);
  }
};

const createEmployee = async (req, res) => {
  const data = {
    id: uuidv4(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    jobTitle: req.body.jobTitle,
    email: req.body.email,
  };

  if (!data.firstName || !data.lastName || !data.jobTitle || !data.email) {
    res.status(400).json({ message: 'Please submit all fields! ' });
    throw new Error('Please submit all fields');
  }

  try {
    const fileData = await fsPromises.readFile(dataPath, 'utf-8');
    let employees = JSON.parse(fileData);

    // Check if email already in use
    if (employees.find(employee => employee.email === data.email)) {
      res.status(409).json({ message: 'Email already used' });
      return;
    }

    employees.push(data);

    await fsPromises.writeFile(dataPath, JSON.stringify(employees, null, 2));

    res.status(200).json(employees);
  } catch (err) {
    console.error(`Got an error trying to write to a file: ${err.message}`);
  }
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
