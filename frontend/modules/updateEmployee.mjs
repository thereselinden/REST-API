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
  console.log(data);

  // fetch(`http://localhost:3000/employees/${id}`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Success:', data);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });
}
