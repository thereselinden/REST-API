//import { getAllEmployeesUrl } from '../../urls.js';
import { printAllEmployees } from '../printAllEmployees.mjs';

// Fetch all employees
export async function fetchAllEmployees() {
  try {
    const res = await fetch('http://localhost:3000/employees');
    const data = await res.json();
    localStorage.setItem('employees', JSON.stringify(data));
    printAllEmployees(data);
  } catch (err) {
    console.error(err.message, err);
  }
}
