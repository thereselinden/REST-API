import { db_url } from '/frontend/urls.js';

export async function deleteSingleEmployee(id) {
  try {
    await fetch(`${db_url}/${id}`, {
      method: 'DELETE',
    }).then(() => {
      location.href = 'index.html';
    });
  } catch (err) {
    console.error(err.message, err);
  }
}
