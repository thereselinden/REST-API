import { card } from './allEmployeesCard.mjs';

export function printAllEmployees(employees) {
  employees.forEach(employee => {
    card(employee);
  });
}
