// To omit error in console that could not append
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname === '/frontend/index.html') fetchAllEmployees();
});

// Fetch all employees
async function fetchAllEmployees() {
  const res = await fetch('http://localhost:3000/employees');
  const data = await res.json();
  printAllEmployees(data);
}

function printAllEmployees(employees) {
  console.log('employees', employees);
  const container = document.querySelector('#employeesContainer');

  employees.forEach(employee => {
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

    const img = document.createElement('img');
    img.classList.add('card-img-top');

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
    card.append(img, cardBody);
    cardWrapper.appendChild(card);
    container.appendChild(cardWrapper);
  });
}

function getSingleEmployee() {
  // to get ID set on card element

  window.location = 'employee.html';
}

async function fetchSingleEmployee(e) {
  const employeeId = e.target.parentElement.parentElement.id;

  const res = await fetch(`http://localhost:3000/employees/${employeeId}`);
  const data = await res.json();
  console.log(data);

  // getSingleEmployee();
}
