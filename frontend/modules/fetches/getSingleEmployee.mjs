//import { getSingleEmployeeUrl } from '../../urls.js';
import { printSingleEmployee } from '../printSingleEmployee.mjs';

export async function fetchSingleEmployee(e) {
  // to get ID set on card element
  const employeeId = e.target.parentElement.parentElement.id;

  const res = await fetch(`http://localhost:3000/employees/${employeeId}`);
  // const res = await fetch(getSingleEmployeeUrl + employeeId);
  const data = await res.json();

  localStorage.setItem('employee', JSON.stringify(data));
  await printSingleEmployee();
  //window.location = 'employee.html';
}
