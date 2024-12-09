document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const studentID = document.getElementById('studentID').value.trim();
    const email = document.getElementById('email').value.trim();
    const faculty = document.getElementById('faculty').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Validation
    if (!fullName || !studentID || !email || !faculty || !dob || !gender || !address || !phone) {
        alert("Please fill in all fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone) || phone.length < 10) {
        alert("Phone number must be numeric and at least 10 digits long.");
        return;
    }

    // If all validations pass
    alert("Registration successful!");
    document.getElementById('registrationForm').reset(); // Clear the form
});