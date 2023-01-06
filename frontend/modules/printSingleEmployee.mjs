import { showModal } from './modal.mjs';
import { deleteSingleEmployee } from './fetches/deleteEmployee.mjs';

export function printSingleEmployee() {
  const employeeLS = JSON.parse(localStorage.getItem('employee'));
  console.log('employee in ls PRINTEMPLOYEE: ', employeeLS);

  const fullname = document.querySelector('#employeeName');
  const jobtitle = document.querySelector('#employeeJobTitle');
  const email = document.querySelector('#employeeEmail');
  const editBtn = document.querySelector('#editBtn');
  const deleteBtn = document.querySelector('.delete-btn');

  fullname.innerHTML = `${employeeLS.firstName} ${employeeLS.lastName}`;
  jobtitle.innerHTML = employeeLS.jobTitle;
  email.innerHTML = employeeLS.email;

  editBtn.addEventListener('click', e => showModal(e));
  deleteBtn.addEventListener('click', () =>
    deleteSingleEmployee(employeeLS.id)
  );
}
