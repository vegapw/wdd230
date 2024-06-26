const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.ariaLabel = "Delete Chapter";
        console.log(deleteButton.ariaLabel);
        li.appendChild(deleteButton);
        list.appendChild(li);
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });
        input.value = '';
        input.focus();
    } else {
        console.log("Input field is empty.");
        input.focus();
    }
});