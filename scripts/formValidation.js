//Password validation
const password1 = document.querySelector('#pass');
const password2 = document.querySelector('#cpass');
const errorMsg = document.querySelector('#feedback');
//Page Rating display
const range = document.querySelector('#range');
const displayRange = document.querySelector('#displayRange');


password2.addEventListener('focusout', () => {
    if (password1.value !== password2.value) {
        errorMsg.textContent = "Passwords do not match!!";
        password1.value = "";
        password2.value = "";
        password1.focus();
    } else {
        errorMsg.textContent = "";
    }
});



range.addEventListener('change', updateRangeValue);
range.addEventListener('input', updateRangeValue);

function updateRangeValue() {
    displayRange.textContent = range.value;
}