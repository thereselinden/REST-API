import { printAllEmployees } from '../printAllEmployees.mjs';
import { db_url } from '/frontend/urls.js';

// Fetch all employees
export async function getAllEmployees() {
  try {
    const res = await fetch(db_url);
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
