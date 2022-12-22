import { getSingleEmployeeUrl } from '../urls.js';

export function printSingleEmployee() {
  const container = document.querySelector('#employeeContainer');
  console.log(container);
  const employee = JSON.parse(localStorage.getItem('employee')) || null;
  console.log(employee.firstName);

  if (!employee) {
    const text = document.createElement('h2');
    text.innerHTML = 'Something went wrong!';
    container.appendChild(text);
  }

  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.classList.add('card-img-top');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const name = document.createElement('h5');
  name.classList.add('card-title');
  name.innerHTML = `${employee.firstName}  ${employee.lastName}`;

  const title = document.createElement('p');
  title.classList.add('card-text');
  title.innerHTML = employee.jobTitle;

  const contact = document.createElement('p');
  contact.classList.add('card-text');
  contact.innerHTML = employee.email;

  const buttonLinkEdit = document.createElement('a');
  buttonLinkEdit.classList.add('btn');
  buttonLinkEdit.classList.add('btn-primary');
  buttonLinkEdit.innerHTML = 'Edit';
  buttonLinkEdit.addEventListener('click', () => {});

  const buttonLinkDelete = document.createElement('a');
  buttonLinkDelete.classList.add('btn');
  buttonLinkDelete.classList.add('btn-danger');
  buttonLinkDelete.innerHTML = 'Delete';
  buttonLinkDelete.addEventListener('click', () => {});

  cardBody.append(name, title, contact, buttonLinkEdit, buttonLinkDelete);
  card.append(img, cardBody);
  container.appendChild(card);
}

export async function fetchSingleEmployee(e) {
  // to get ID set on card element
  const employeeId = e.target.parentElement.parentElement.id;

  const res = await fetch(getSingleEmployeeUrl + employeeId);
  const data = await res.json();

  localStorage.setItem('employee', JSON.stringify(data));
  printSingleEmployee();
  window.location = 'employee.html';
}
