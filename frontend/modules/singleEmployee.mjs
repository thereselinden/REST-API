import { getSingleEmployeeUrl } from '../urls.js';

function printSingleEmployee(employee) {
  console.log('inside singleEmployeefunction', employee);
  //const employeesContainer = document.querySelector('#employeesContainer');
  //employeesContainer.setAttribute('style', 'display:none !important');
}

export async function fetchSingleEmployee(e) {
  // to get ID set on card element
  const employeeId = e.target.parentElement.parentElement.id;

  const res = await fetch(getSingleEmployeeUrl + employeeId);
  const data = await res.json();
  printSingleEmployee(data);
  //window.location = 'employee.html';
}
