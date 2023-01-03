import { db_url } from '/frontend/urls.js';

export async function deleteSingleEmployee(id) {
  try {
    await fetch(`${db_url}/${id}`, {
      method: 'DELETE',
    }).then(() => {
      window.location = 'index.html';
    });
  } catch (err) {
    console.log(err.message, err);
  }
}
