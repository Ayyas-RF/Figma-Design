document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Retrieve form elements
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Regular expression for username validation
    const usernameRegex = /^[A-Za-z0-9]{5,}$/;
    // Validate username
    if (!usernameRegex.test(username)) {
        alert('Username must be at least 5 characters long and can only contain letters and numbers.');
        return;
    }

    // Validate password
    if (password.length < 5) {
        alert('Password must be at least 5 characters long.');
        return;
    }

    // If success
    alert('Form submitted successfully!');
    window.location.href = 'index-h.html';
});