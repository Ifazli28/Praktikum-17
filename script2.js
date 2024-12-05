const button = document.getElementById('hoverButton');
const messageDisplay = document.getElementById('messageDisplay');

button.addEventListener('mouseover', function() {
    messageDisplay.textContent = 'Mouse is over the button!';
    });
button.addEventListener('mouseout', function() {
    messageDisplay.textContent = '';
    });