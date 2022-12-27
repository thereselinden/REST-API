//import { getAllEmployeesUrl } from '../../urls.js';
import { printAllEmployees } from '../printAllEmployees.mjs';

// Fetch all employees
export async function fetchAllEmployees() {
  try {
    const res = await fetch('http://localhost:3000/employees');

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
