const express = require('express');
const cors = require('cors');

const router = express.Router();
const {
  getEmployees,
  getSingleEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employeeController');

// to fix CORS problem installed NPM package and used it on routes, if no routes used, cors should be enabled on APP
// Read more on CORS problem and how to fix them:
//https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
router.use(cors());

router.get('/', getEmployees);
router.get('/:id', getSingleEmployee);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;
