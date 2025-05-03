document.getElementById('startStopButton').onclick = function() {
  let button = document.getElementById('startStopButton');
  if (button.textContent === 'Start') {
    button.textContent = 'Stop';
    button.classList.add('disabled');
  } else {
    button.textContent = 'Start';
    button.classList.remove('disabled');
  }
};
