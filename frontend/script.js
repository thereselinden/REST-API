import { fetchAllEmployees } from './modules/allEmployees.mjs';
import { printSingleEmployee } from './modules/singleEmployee.mjs';

// listener
document.addEventListener('DOMContentLoaded', () => {
  console.log(window.location.pathname);
  if (window.location.pathname === '/frontend/index.html') {
    console.log('inside if');
    fetchAllEmployees();
  } else {
    console.log('inside else');
    printSingleEmployee();
  }
});

document.querySelector('#homeLink').addEventListener('click', backToStartPage);

function backToStartPage() {
  if (window.location.pathname === '/frontend/employee.html') {
    return (window.location = 'index.html');
  }
}
