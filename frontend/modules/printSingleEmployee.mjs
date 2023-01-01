import { card } from './singleEmployeeCard.mjs';

export function printSingleEmployee() {
  const employeeLS = JSON.parse(localStorage.getItem('employee')) || null;

  const allContainer = document.querySelector('#employeesContainer');
  allContainer.setAttribute('style', 'display: none !important');

  let container = document.querySelector('#singleEmployee');
  container.style.display = 'flex';

  container.innerHTML = '';

  if (!employeeLS) {
    const text = document.createElement('h2');
    text.innerHTML = 'Something went wrong!';
    container.appendChild(text);
  }

  card(employeeLS, container);
}
