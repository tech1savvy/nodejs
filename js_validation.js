function validateForm() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    var password = document.getElementById('password').value;

    if (phoneNumber.length !== 10) {
        alert('Phone number must be 10 digits.');
        return false;
    }

    if (password.length < 8 || !password.match(/[A-Z]/) || !password.match(/[0-9]/)) {
        alert('Password must be at least 8 characters, include one uppercase letter and one digit.');
        return false;
    }

    return true;
}