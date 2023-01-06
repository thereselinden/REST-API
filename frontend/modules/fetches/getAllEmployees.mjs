import { printAllEmployees } from '../printAllEmployees.mjs';
import { db_url } from '/frontend/urls.js';

// Fetch all employees

export async function getAllEmployees() {
  try {
    const res = await fetch(db_url);

    if (!res.ok) {
      throw new Error('An error occured');
    }
    const data = await res.json();
    const sortedData = data.sort((a, b) =>
      a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
    );
    localStorage.setItem('employees', JSON.stringify(sortedData));
    printAllEmployees(sortedData);
  } catch (err) {
    console.error('errorMessage: ', err.message, err.stack);
  }
}

// export function getAllEmployees() {
//   fetch(db_url)
//     .then(res => res.json())
//     .then(data => {
//       const sortedData = data.sort((a, b) =>
//         a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
//       );
//       return sortedData;
//     })
//     .then(sortedData => {
//       localStorage.setItem('employees', JSON.stringify(sortedData));
//       printAllEmployees(sortedData);
//     })
//     .catch(err => {
//       console.error('errorMessage: ', err, err.message);
//     });
// }
