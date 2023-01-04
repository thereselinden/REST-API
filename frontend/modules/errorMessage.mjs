export function errorMessage(message) {
  const errorMessage = document.querySelector('#errorMessage');
  errorMessage.innerHTML = message;
  errorMessage.classList.add('text-danger');
  errorMessage.classList.add('fw-bold');

  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 3000);
}
