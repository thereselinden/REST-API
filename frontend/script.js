import { getAllEmployees } from './modules//fetches/getAllEmployees.mjs';
import { validateInput } from './modules/validation.mjs';
import { printSingleEmployee } from './modules/printSingleEmployee.mjs';

// To be able to call onload in body (html page)
window.getAllEmployees = getAllEmployees;

if (window.location.pathname === '/frontend/addEmployee.html') {
  const addEmployeeBtn = document.querySelector('#addEmployeeBtn');
  addEmployeeBtn.addEventListener('click', e => validateInput(e));
}

if (window.location.pathname === '/frontend/employee.html') {
  document.addEventListener('DOMContentLoaded', () => {
    const selectedEmployee = JSON.parse(localStorage.getItem('employee'));
    printSingleEmployee(selectedEmployee);
  });
}
