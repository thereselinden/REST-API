//import { getAllEmployeesUrl } from '../../urls.js';
import { printAllEmployees } from '../printAllEmployees.mjs';

// Fetch all employees
export async function fetchAllEmployees() {
  try {
    const res = await fetch('http://localhost:3000/employees');
    const data = await res.json();
    const sortedData = data.sort((a, b) =>
      a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
    );
    localStorage.setItem('employees', JSON.stringify(sortedData));
    printAllEmployees(sortedData);
  } catch (err) {
    console.error(err.message, err);
  }
}
