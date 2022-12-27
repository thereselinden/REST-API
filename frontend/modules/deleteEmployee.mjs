import { deleteEmployeeUrl } from '../urls.js';

export async function deleteSingleEmployee(e) {
  const id = e.target.id;

  try {
    await fetch(`${deleteEmployeeUrl}/${id}`, {
      method: 'DELETE',
    });
    await location.reload();
    // vad ska jag göra här? VIll helst skicka tillbaka till ('/') för att göra en ny fetch
  } catch (err) {
    console.log(err);
  }
}
