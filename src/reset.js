function logReset(event) {
    log.textContent = ``;
  }
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('reset', logReset);