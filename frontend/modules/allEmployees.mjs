import { fetchSingleEmployee } from './singleEmployee.mjs';
import { getAllEmployeesUrl } from '../urls.js';

// Fetch all employees
export async function fetchAllEmployees() {
  try {
    const res = await fetch(getAllEmployeesUrl);

    //TODO: Show a button to refresh if fetched failed
    // if (!res) {
    //   const button = document.createElement('button');
    //   button.innerHTML = 'Reaload page';
    //   button.addEventListener('click', () => {
    //     location.reload();
    //   });
    //   document.body.appendChild(button);
    // }

    // if (!res) {
    //   throw new Error();
    // }

    const data = await res.json();
    printAllEmployees(data);
  } catch (err) {
    console.error(err.message, err);
  }
}

function printAllEmployees(employees) {
  console.log('employees', employees);
  const container = document.querySelector('#employeesContainer');

  employees.forEach(employee => {
    // how to use card function instead of rewriting the code
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');
    cardWrapper.classList.add('col-12');
    cardWrapper.classList.add('col-sm-12');
    cardWrapper.classList.add('col-md-6');
    cardWrapper.classList.add('col-lg-4');
    cardWrapper.classList.add('text-center');

    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', employee.id);

    // const img = document.createElement('img');
    // img.classList.add('card-img-top');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const name = document.createElement('h5');
    name.classList.add('card-title');
    name.textContent = `${employee.firstName}  ${employee.lastName}`;

    const title = document.createElement('p');
    title.classList.add('card-text');
    title.textContent = employee.jobTitle;

    const contact = document.createElement('p');
    contact.classList.add('card-text');
    contact.textContent = employee.email;

    const buttonLink = document.createElement('a');
    buttonLink.classList.add('btn');
    buttonLink.classList.add('btn-primary');
    buttonLink.innerHTML = 'Go to employee';
    buttonLink.addEventListener('click', e => fetchSingleEmployee(e));

    cardBody.append(name, title, contact, buttonLink);
    card.append(cardBody);
    cardWrapper.appendChild(card);
    container.appendChild(cardWrapper);
  });
}
