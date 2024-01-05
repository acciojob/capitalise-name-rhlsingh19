//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const inputField = document.getElementById('fname');

  inputField.addEventListener('blur', function(event) {
    // Convert the entered text to uppercase
    inputField.value = inputField.value.toUpperCase();
  });
});

