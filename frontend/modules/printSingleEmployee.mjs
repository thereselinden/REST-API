import { card } from './singleEmployeeCard.mjs';

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
