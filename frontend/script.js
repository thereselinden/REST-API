import { fetchAllEmployees } from './modules/allEmployees.mjs';
//import { getSingleEmployeeUrl } from './urls';

// LISTENER
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname === '/frontend/index.html') {
    fetchAllEmployees();
  }
  // else {
  //   printSingleEmployee();
  //   //fetchSingleEmployee();
  // }
});

document.querySelector('#homeLink').addEventListener('click', backToStartPage);

function backToStartPage() {
  const allEmployeesContainer = document.querySelector('#employeesContainer');
  allEmployeesContainer.removeAttribute('style');

  const employeeContainer = document.querySelector('#singleEmployee');
  employeeContainer.setAttribute('style', 'display: none !important');
  // if (window.location.pathname === '/frontend/employee.html') {
  //   console.log('back to start');
  //   return (window.location = 'index.html');
  // }
}
