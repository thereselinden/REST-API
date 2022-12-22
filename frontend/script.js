import { fetchAllEmployees } from './modules/allEmployees.mjs';

// listener
// To omit error in console that could not append
// document.addEventListener('DOMContentLoaded', () => {
//   if (window.location.pathname === '/frontend/index.html') fetchAllEmployees();
// });

fetchAllEmployees();
