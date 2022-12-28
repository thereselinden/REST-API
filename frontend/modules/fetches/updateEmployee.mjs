export async function updateSingleEmployee(updatedData, id) {
  const res = await fetch(`http://localhost:3000/employees/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
  const data = await res.json();
  // TODO: Reload first index page '/' to refetch all employees
  // TODO: OR should I just rerun this page and print single employee with new data?
  console.log('Update fetch data json: ', data);
}
