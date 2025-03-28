document.getElementById('myForm').addEventListener('submit', function(event) {
    let valid = true;

    // Name Validation
    let name = document.getElementById('name').value;
    if (name.trim() === "") {
        document.getElementById('nameError').innerText = "Name is required";
        valid = false;
    } else {
        document.getElementById('nameError').innerText = "";
    }

    // Age Validation
    let age = document.getElementById('age').value;
    if (age === "" || age < 1) {
        document.getElementById('ageError').innerText = "Valid age is required";
        valid = false;
    } else {
        document.getElementById('ageError').innerText = "";
    }

    // Email Validation
    let email = document.getElementById('email').value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Enter a valid email";
        valid = false;
    } else {
        document.getElementById('emailError').innerText = "";
    }

    //  Fee Validation
    let fee = document.getElementById('fee').value;
    if (fee === "" || fee < 0) {
        document.getElementById('feeError').innerText = "Fee must be a positive number";
        valid = false;
    } else {
        document.getElementById('feeError').innerText = "";
    }

    if (!valid) {
        event.preventDefault(); 
    }
 });

