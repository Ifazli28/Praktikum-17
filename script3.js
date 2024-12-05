const input = document.getElementById('characterInput');
const lastCharacterDisplay = document.getElementById('lastCharacterDisplay');

input.addEventListener('keydown', function(event) {
    lastCharacterDisplay.textContent = `Karakter terakhir yang ditekan akan muncul di sini :  ${event.key}`;
});
