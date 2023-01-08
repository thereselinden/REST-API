import { getAllEmployees } from './getAllEmployees.mjs';
import { db_url } from '../../urls.js';

export async function postEmployee(employeeData) {
  try {
    const res = await fetch(db_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    });
    const data = await res.json();

    // data.message because data is return as message upon fail (console.log(data.message))
    if (!data.message) {
      await getAllEmployees().then(() => {
        location.href = 'index.html';
      });
    }
  } catch (err) {
    console.error(err, err.message);
  }
}
