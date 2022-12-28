import { deleteSingleEmployee } from './fetches/deleteEmployee.mjs';
import { showModal } from './modal.mjs';

export const card = (employee, container) => {
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

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('d-flex');
  buttonContainer.classList.add('justify-content-around');
  buttonContainer.classList.add('ms-5');
  buttonContainer.classList.add('me-5');

  const editBtn = document.createElement('a');
  editBtn.classList.add('btn');
  editBtn.classList.add('btn-primary');
  editBtn.id = employee.id;
  editBtn.innerHTML = 'Edit';
  editBtn.setAttribute('data-bs-toggle', '#myModal');
  editBtn.setAttribute('data-bs-target', 'ModalLoginForm');
  // editBtn.addEventListener('click', e => updateSingleEmployee(e));
  editBtn.addEventListener('click', e => showModal(e));

  const deleteBtn = document.createElement('a');
  deleteBtn.classList.add('btn');
  deleteBtn.classList.add('btn-danger');
  deleteBtn.id = employee.id;
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.addEventListener('click', e => deleteSingleEmployee(e));

  buttonContainer.append(editBtn, deleteBtn);
  cardBody.append(name, title, contact, buttonContainer);
  card.append(cardBody);
  cardWrapper.appendChild(card);
  container.appendChild(cardWrapper);
};
