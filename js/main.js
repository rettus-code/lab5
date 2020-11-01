const form1 = document.querySelector('.feedback')

form.addEventListener('submit', e => {
    e.preventDefault();

    const sub = form1.subscribe.value;
    if (sub == '') {
        alert("Enter a Valid Namw!");
        form1.subscribe.style.border = "1px solid crimson";
        return false;
    }
    form1.submit();
})