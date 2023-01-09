import { showModal } from './modal.mjs';
import { deleteSingleEmployee } from './fetches/deleteEmployee.mjs';

export function printSingleEmployee(employee) {
  const fullname = document.querySelector('#employeeName');
  const jobtitle = document.querySelector('#employeeJobTitle');
  const email = document.querySelector('#employeeEmail');
  const editBtn = document.querySelector('#editBtn');
  const deleteBtn = document.querySelector('.delete-btn');

  fullname.innerHTML = `${employee.firstName} ${employee.lastName}`;
  jobtitle.innerHTML = employee.jobTitle;
  email.innerHTML = employee.email;

  editBtn.addEventListener('click', e => showModal(e));
  deleteBtn.addEventListener('click', () => deleteSingleEmployee(employee.id));
}
