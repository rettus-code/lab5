const forms = document.querySelector('.formBook')

forms.addEventListener('submit', e => {
    e.preventDefault();

    const bookDate = forms.bookDate.value;
    const bookDated = forms.bookDated.value;
    const room = forms.room.value;
    const guest = forms.guest.value;
    const bookEmail = forms.bookEmail.value;
    const bookMessage = forms.bookMessage.value;

    if (bookDate == '') {
        alert("Enter a Valid Arrival Date!");
        forms.bookDate.style.border = "red";
        return false;
    }
    if (bookDated == '') {
        alert("Enter a Valid Departure Date!");
        forms.bookDated.style.border = "red";
        return false;
    }
    if (room == '') {
        alert("Room Field Must Not be Empty");
        forms.room.style.border = "red";
        return false;
    }
    if (guest == '') {
        alert("Enter a Valid guest!");
        forms.guest.style.border = "red";
        return false;
    }
    if (bookEmail == '') {
        alert("Enter a Valid Email Address!");
        forms.bookEmail.style.border = "red";
        return false;
    }
    if (bookMessage == '') {
        alert("Message Field Must Not be Empty!");
        forms.bookMessage.style.border = "red";
        return false;
    }
    forms.submit();
})