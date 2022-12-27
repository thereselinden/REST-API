export async function updateSingleEmployee(updatedData, id) {
  //console.log('updateSingleEmployee', e.target.id);
  // console.log('data', updatedData);
  // console.log(id);

  const res = await fetch(`http://localhost:3000/employees/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
  const data = res.json();
  // TODO: Reload first index page '/' to refetch all employees
  // TODO: OR should I just rerun this page and print single employee with new data?
  console.log('Update fetch data json: ', data);
}
