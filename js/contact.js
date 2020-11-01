const form = document.querySelector('.contactform')


form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    if (name == '') {
        alert("Enter a Valid Name!");
        form.name.style.borderColor = "red";
        return false;
    }
    if (phone == '') {
        alert("Enter a Valid Phone Number!");
        form.name.style.borderColor = "red";
        return false;
    }
    if (email == '') {
        alert("Enter a Valid Email Address!");
        form.name.style.borderColor = "red";
        return false;
    }
    form.submit();

})