import { printSingleEmployee } from '../printSingleEmployee.mjs';

export async function fetchSingleEmployee(e) {
  const employeeId = e.target.parentElement.parentElement.id;

  const res = await fetch(`http://localhost:3000/employees/${employeeId}`);
  const data = await res.json();

  localStorage.setItem('employee', JSON.stringify(data));
  printSingleEmployee(e);
}
