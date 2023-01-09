const express = require('express');
const cors = require('cors');

const router = express.Router();
const {
  getEmployees,
  getSingleEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employees.controller');

router.use(cors());

router.get('/', getEmployees);
router.get('/:id', getSingleEmployee);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;
