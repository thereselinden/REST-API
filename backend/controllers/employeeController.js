const { v4: uuidv4 } = require('uuid');
const fsPromises = require('fs').promises;

const dataPath = 'backend/data/employees.json';

const getEmployees = async (req, res) => {
  try {
    const result = await fsPromises.readFile(dataPath, 'utf-8');
    const employees = JSON.parse(result);
    res.status(200).json(employees);
  } catch (err) {
    res.status(400).res.json({ message: err.message });
  }
};

const getSingleEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const fileData = await fsPromises.readFile(dataPath, 'utf-8');
    const employees = JSON.parse(fileData);
    let employee = employees.find(data => data.id.toString() === id);

    if (!employee) {
      res.status(400).json({ message: 'Could not find employee' });
      return;
    }
    res.status(200).json(employee);
  } catch (err) {
    res.status(404).json({ message: err.message });
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
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: res.message });
  }
};

const updateEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const fileData = await fsPromises.readFile(dataPath, 'utf-8');
    const employees = JSON.parse(fileData);

    let employee = employees.find(data => data.id.toString() === id);

    if (!employee) {
      res.status(400).json({ message: 'Could not find employee' });
      return;
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
    res.status(404).json({ message: err.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const fileData = await fsPromises.readFile(dataPath, 'utf-8');
    const employees = JSON.parse(fileData);

    let employee = employees.find(data => data.id === req.params.id);

    if (!employee) {
      res.status(400).json({ message: 'Could not find employee' });
      return;
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
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getEmployees,
  getSingleEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
