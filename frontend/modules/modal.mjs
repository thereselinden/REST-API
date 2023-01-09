import { updateSingleEmployee } from './fetches/updateEmployee.mjs';

export async function showModal() {
  let modalWrap = null;
  const employee = JSON.parse(localStorage.getItem('employee')) || null;

  // omit to create multiply modal boxes
  if (modalWrap) {
    modalWrap.remove();
  }

  modalWrap = document.createElement('div');
  modalWrap.classList.add('modal-wrapper');
  modalWrap.innerHTML = `
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Update employee information</h5>
        </div>
        <div class="modal-body">
          <form id="employeeForm">
            <div class="mb-3">
              <input type="text" class="form-control" id="eFirstName" value=${employee.firstName}>
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="eLastName" value=${employee.lastName}>
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="eJobTitle" value=${employee.jobTitle}>
            </div>
            <div class="mb-3">
              <input type="email" class="form-control" id="eEmail" value=${employee.email}>
            </div>
    
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Save</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>`;

  document.body.append(modalWrap);

  let modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();

  const myForm = document.querySelector('#employeeForm');

  myForm.addEventListener('submit', async e => {
    e.preventDefault();
    let firstName = document.querySelector('#eFirstName').value;
    let lastName = document.querySelector('#eLastName').value;
    let jobTitle = document.querySelector('#eJobTitle').value;
    let email = document.querySelector('#eEmail').value;

    const updatedData = { firstName, lastName, jobTitle, email };
    await updateSingleEmployee(updatedData, employee.id);
    modal.hide();
  });
}
