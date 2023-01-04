import { postEmployee } from './fetches/postEmployee.mjs';
import { errorMessage } from './errorMessage.mjs';

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
      errorMessage('Email already taken');
    }
  });

  if (!firstName || !lastName || !jobTitle || !email) {
    errorMessage('Fill all credentials');
  } else {
    const employeeData = { firstName, lastName, jobTitle, email };
    postEmployee(employeeData);
  }
}
