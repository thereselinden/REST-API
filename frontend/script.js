import { fetchAllEmployees } from './modules//fetches/getAllEmployees.mjs';
import { validateInput } from './modules/fetches/addEmployee.mjs';
import { fetchSingleEmployee } from './modules/fetches/getSingleEmployee.mjs';

// LISTENER
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname === '/frontend/index.html') {
    fetchAllEmployees();
  }
});

// Execute only if path equals addEmployee
if (window.location.pathname === '/frontend/addEmployee.html') {
  const addEmployeeBtn = document.querySelector('#addEmployeeBtn');
  addEmployeeBtn.addEventListener('click', e => validateInput(e));
}

// If I manage to get employee on separate html file
// document.addEventListener('DOMContentLoaded', () => {
//   if (window.location.pathname === '/frontend/employee.html') {
//     //fetchSingleEmployee();
//   }
// });

//TODO: Only needed if I am unable to separate single employee to separate html page
// Handle and toggle visability of employees and employee container
document.querySelector('#homeLink').addEventListener('click', backToStartPage);

function backToStartPage() {
  const allEmployeesContainer = document.querySelector('#employeesContainer');
  allEmployeesContainer.removeAttribute('style');

  const employeeContainer = document.querySelector('#singleEmployee');
  employeeContainer.setAttribute('style', 'display: none !important');
}
