export async function addEmployee(e) {
  e.preventDefault();

  try {
    // get values
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const jobTitle = document.querySelector('#jobTitle').value;
    const email = document.querySelector('#email').value;

    // destucture values to an object
    const employeeData = { firstName, lastName, jobTitle, email };

    // TODO: Make sure valid email AND show message if email already exist
    // TODO: Show error message if input fields are empty

    if (firstName && lastName && jobTitle && email) {
      // make a post request
      const res = await fetch('http://localhost:3000/employees/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });

      // Direct back to index.html
      location.href = 'index.html';
      return res.json();
    } else {
      alert('Please fill all fields');
    }
  } catch (err) {
    console.log(err, err.message);
  }
}
