export function showErrorMessage(message) {
  const errorMessage = document.querySelector('#errorMessage');
  errorMessage.innerHTML = message;
  errorMessage.classList.add('text-danger');

  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 3000);
}
