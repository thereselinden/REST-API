import { getAllEmployees } from './modules//fetches/getAllEmployees.mjs';
import { validateInput } from './modules/validation.mjs';
import { printSingleEmployee } from './modules/printSingleEmployee.mjs';

// To be able to call onload in body (html page)
window.getAllEmployees = getAllEmployees;

// LISTENER
// document.addEventListener('DOMContentLoaded', async () => {
//   if (window.location.pathname === '/frontend/index.html') {
//     await getAllEmployees();
//   }
// });

// Execute only if path equals addEmployee
if (window.location.pathname === '/frontend/addEmployee.html') {
  const addEmployeeBtn = document.querySelector('#addEmployeeBtn');
  addEmployeeBtn.addEventListener('click', e => validateInput(e));
}

// Get stored user data in LS
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname === '/frontend/employee.html') {
    const selectedEmployee = JSON.parse(localStorage.getItem('employee'));
    printSingleEmployee(selectedEmployee);
  }
});
