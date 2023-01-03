import { postEmployee } from './fetches/postEmployee.mjs';
import { showErrorMessage } from './showErrorMessage.mjs';

export function validateInput(e) {
  e.preventDefault();

  const employees = JSON.parse(localStorage.getItem('employees'));

  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const jobTitle = document.querySelector('#jobTitle').value;
  const email = document.querySelector('#email').value;

  // check if email is unique
  employees.find(employee => {
    if (employee.email === email) {
      showErrorMessage('Email already taken');
    }
  });

  if (!firstName || !lastName || !jobTitle || !email) {
    showErrorMessage('Fill all credentials');
  } else {
    const employeeData = { firstName, lastName, jobTitle, email };
    postEmployee(employeeData);
  }
}
