//import { deleteEmployeeUrl } from '../../urls.js';

import { fetchAllEmployees } from './getAllEmployees.mjs';

export async function deleteSingleEmployee(e) {
  const id = e.target.id;

  try {
    await fetch(`http://localhost:3000/employees/${id}`, {
      method: 'DELETE',
    });
    window.location = 'index.html';
  } catch (err) {
    console.log(err);
  }
}
