const { v4: uuidv4 } = require('uuid');
const fsPromises = require('fs').promises;

const dataPath = 'backend/data/employees.json';

const getEmployees = async (req, res, next) => {
  try {
    const result = await fsPromises.readFile(dataPath, 'utf-8');

    if (result.length < 1) {
      const err = new Error('File does not hold any data');
      err.statusCode = 400;
      throw err;
    }
    const employees = JSON.parse(result);
    res.status(200).json(employees);
  } catch (err) {
    next(err);
  }
};

const getSingleEmployee = async (req, res, next) => {
  const id = req.params.id;
  try {
    const fileData = await fsPromises.readFile(dataPath, 'utf-8');
    const employees = JSON.parse(fileData);
    let employee = employees.find(data => data.id.toString() === id);

    if (!employee) {
      const err = new Error('Could not find employee');
      err.statusCode = 400;
      throw err;
    }
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};

const createEmployee = async (req, res, next) => {
  const data = {
    id: uuidv4(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    jobTitle: req.body.jobTitle,
    email: req.body.email,
  };

  // check that all input fields are filled in
  if (!data.firstName || !data.lastName || !data.jobTitle || !data.email) {
    const err = new Error('Please submit all fields!');
    err.statusCode = 400;
    throw err;
  }

  try {
    const fileData = await fsPromises.readFile(dataPath, 'utf-8');
    let employees = JSON.parse(fileData);

    // Check if email already in use
    if (employees.find(employee => employee.email === data.email)) {
      const err = new Error('Email already in use');
      err.statusCode = 409;
      throw err;
    }

    employees.push(data);
    await fsPromises.writeFile(dataPath, JSON.stringify(employees, null, 2));
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const updateEmployee = async (req, res, next) => {
  const id = req.params.id;
  try {
    const fileData = await fsPromises.readFile(dataPath, 'utf-8');
    const employees = JSON.parse(fileData);

    let employee = employees.find(data => data.id.toString() === id);

    if (!employee) {
      const err = new Error('Could not find employee');
      err.statusCode = 400;
      throw err;
    }

    // remove employee from array where id matches params
    const index = employees.findIndex(obj => obj.id === id);
    const updatedEmployeeList = [
      ...employees.slice(0, index), //starts at index 0 and ends at index of the param object.
      ...employees.slice(index + 1), // starts at index of param object +1 and all the rest within the array, no end
    ];

    // Create new employee values based on req.body fallback on initial if not specified in body
    employee = {
      id: req.params.id,
      firstName: req.body.firstName || employee.firstName,
      lastName: req.body.lastName || employee.lastName,
      jobTitle: req.body.jobTitle || employee.jobTitle,
      email: req.body.email || employee.email,
    };

    updatedEmployeeList.push(employee);

    // write file
    await fsPromises.writeFile(
      dataPath,
      JSON.stringify(updatedEmployeeList, null, 2)
    );
    res.status(200).json(employee); //only return updated object.
  } catch (err) {
    next(err);
  }
};

const deleteEmployee = async (req, res, next) => {
  try {
    const fileData = await fsPromises.readFile(dataPath, 'utf-8');
    const employees = JSON.parse(fileData);

    let employee = employees.find(data => data.id === req.params.id);

    if (!employee) {
      const err = new Error('Could not find employee');
      err.statusCode = 400;
      throw err;
    }

    // remove employee from array where id matches param
    const index = employees.findIndex(obj => obj.id === req.params.id);
    const updatedEmployeeList = [
      ...employees.slice(0, index), //starts at index 0 and ends at index of the param object.
      ...employees.slice(index + 1), // starts at index of param object +1 and all the rest within the array, no end
    ];

    // write file
    await fsPromises.writeFile(
      dataPath,
      JSON.stringify(updatedEmployeeList, null, 2)
    );
    res.status(200).json({ status: 'success' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getEmployees,
  getSingleEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
