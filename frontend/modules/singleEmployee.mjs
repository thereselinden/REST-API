import { getSingleEmployeeUrl } from '../urls.js';
import { card } from './card.mjs';
import { employeeForm } from './singleEmployeeForm.mjs';

export async function printSingleEmployee() {
  const allContainer = document.querySelector('#employeesContainer');
  allContainer.setAttribute('style', 'display: none !important');

  let container = document.querySelector('#singleEmployee');
  container.style.display = 'flex';

  container.innerHTML = '';

  const employee = JSON.parse(localStorage.getItem('employee')) || null;

  if (!employee) {
    const text = document.createElement('h2');
    text.innerHTML = 'Something went wrong!';
    container.appendChild(text);
  }

  card(employee, container);
  //employeeForm();
}

export async function fetchSingleEmployee(e) {
  // to get ID set on card element
  const employeeId = e.target.parentElement.parentElement.id;

  const res = await fetch(getSingleEmployeeUrl + employeeId);
  const data = await res.json();

  localStorage.setItem('employee', JSON.stringify(data));
  await printSingleEmployee();
  //window.location = 'employee.html';
}
