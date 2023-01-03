import { card } from './card.mjs';

export function printAllEmployees(employees) {
  employees.forEach(employee => {
    card(employee);
  });
}
