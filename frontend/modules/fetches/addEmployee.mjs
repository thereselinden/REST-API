import { fetchAllEmployees } from './getAllEmployees.mjs';

export async function addEmployee(employeeData) {
  try {
    const res = await fetch('http://localhost:3000/employees/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    });
    const data = await res.json();

    // data.message because data is return as message upon fail (console.log(data.message))
    if (!data.message) {
      await fetchAllEmployees();
      location.href = 'index.html';
    }
  } catch (err) {
    console.log(err, err.message);
  }
}

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
    addEmployee(employeeData);
  }
}

function showErrorMessage(message) {
  const errorMessage = document.querySelector('#errorMessage');
  errorMessage.innerHTML = message;
  errorMessage.classList.add('text-danger');

  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 3000);
}
