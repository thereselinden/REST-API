import { updateSingleEmployee } from './fetches/updateEmployee.mjs';
import { fetchSingleEmployee } from './fetches/getSingleEmployee.mjs';
export function showModal() {
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
              <input type="text" class="form-control" id="employeeFirstName" value=${employee.firstName}>
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="employeeLastName" value=${employee.lastName}>
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="employeeJobTitle" value=${employee.jobTitle}>
            </div>
            <div class="mb-3">
              <input type="email" class="form-control" id="employeeEmail" value=${employee.email}>
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
  myForm.addEventListener('submit', e => {
    e.preventDefault();
    const firstName = document.querySelector('#employeeFirstName').value;
    const lastName = document.querySelector('#employeeLastName').value;
    const jobTitle = document.querySelector('#employeeJobTitle').value;
    const email = document.querySelector('#employeeEmail').value;

    const updatedData = { firstName, lastName, jobTitle, email };
    updateSingleEmployee(updatedData, employee.id);
    modal.hide();
    location.href = 'index.html';
  });
}
