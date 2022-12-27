export function employeeForm() {
  const employee = JSON.parse(localStorage.getItem('employee')) || null;
  console.log(employee);

  const fullName = `${employee.firstName} + ${employee.lastName}`;
  console.log(fullName);

  const container = document.querySelector('#singleEmployee');
  const form = document.createElement('form');
  form.innerHTML = `
    <div class="mb-3">
    <label for="employeeName" class="form-label">First name</label>
      <input type="text" class="form-control" id="employeeName" value=${fullName} readonly >
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" id="employeeTitle">
    </div>
    <div class="mb-3">
      <input type="name" class="form-control" id="employeeEmail">
    </div>
    <button type="button" class="btn btn-primary">Edit</button>
    <button type="button" class="btn btn-danger">Delete</button>
`;

  container.appendChild(form);
}

/*
<form>
  <div class="mb-3">
    <input type="text" class="form-control" id="employeeName">
  </div>
  <div class="mb-3">
    <input type="text" class="form-control" id="employeeTitle">
  </div>
    <div class="mb-3">
    <input type="name" class="form-control" id="employeeEmail">
  </div>
  <button type="button" class="btn btn-primary">Edit</button>
  <button type="button" class="btn btn-danger">Delete</button>
</form>

*/
