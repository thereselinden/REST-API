import { card } from './allEmployeesCard.mjs';
export function printAllEmployees(employees) {
  console.log('employees', employees);

  employees.forEach(employee => {
    card(employee);
  });
}
