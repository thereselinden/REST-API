import { db_url } from '/frontend/urls.js';

export async function getSingleEmployee(id) {
  try {
    const res = await fetch(`${db_url}/${id}`);
    const data = await res.json();

    localStorage.setItem('employee', JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
}
