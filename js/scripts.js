document.addEventListener('DOMContentLoaded', function() {

    console.log('test');
    var buttons = document.querySelectorAll('.my-button');
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        alert('Button clicked!');
      });
    });
  });