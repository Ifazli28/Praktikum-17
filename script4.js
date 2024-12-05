const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const dynamicList = document.getElementById('dynamicList');

addItemBtn.addEventListener('click', function() {
    const newItemText = itemInput.value.trim();

    if (newItemText !== '') {
    const newListItem = document.createElement('li');
    newListItem.textContent = newItemText;
    dynamicList.appendChild(newListItem);
    itemInput.value = '';
    }
    
});