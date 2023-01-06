import { db_url } from '/frontend/urls.js';

export async function updateSingleEmployee(updatedData, id) {
  const res = await fetch(`${db_url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
  const data = await res.json();

  localStorage.setItem('employee', JSON.stringify(data));
}
