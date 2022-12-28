import { fetchAllEmployees } from './modules//fetches/getAllEmployees.mjs';
import { addEmployee, validateInput } from './modules/fetches/addEmployee.mjs';
import { fetchSingleEmployee } from './modules/fetches/getSingleEmployee.mjs';
//import { getSingleEmployeeUrl } from './urls';

// LISTENER
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname === '/frontend/index.html') {
    fetchAllEmployees();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname === '/frontend/employee.html') {
    console.log('pathName', window.location.pathname);
    // fetchSingleEmployee();
  }
});

document.querySelector('#homeLink').addEventListener('click', backToStartPage);

function backToStartPage() {
  //TODO: Only needed if I am unable to separate single employee to separate html page
  console.log('backToStartPage called');
  const allEmployeesContainer = document.querySelector('#employeesContainer');
  allEmployeesContainer.removeAttribute('style');

  const employeeContainer = document.querySelector('#singleEmployee');
  employeeContainer.setAttribute('style', 'display: none !important');
  // if (window.location.pathname === '/frontend/employee.html') {
  //   console.log('back to start');
  //   return (window.location = 'index.html');
  // }
}

const addEmployeeBtn = document.querySelector('#addEmployeeBtn');
addEmployeeBtn.addEventListener('click', e => validateInput(e));
