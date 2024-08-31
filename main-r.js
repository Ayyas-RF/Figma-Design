document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let valid = true;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const recaptchaResponse = grecaptcha.getResponse();
    
    // Clear previous errors
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('recaptchaError').textContent = '';
    
    // Validate username
    const usernameRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
    if (!usernameRegex.test(username)) {
        document.getElementById('usernameError').textContent = 'Username must be at least 5 characters long and include a mix of letters and numbers.';
        valid = false;
    }
    
    // Validate password
    if (password.length < 5) {
        document.getElementById('passwordError').textContent = 'Password must be at least 5 characters long.';
        valid = false;
    }
    
    // Validate CAPTCHA
    if (!recaptchaResponse) {
        document.getElementById('recaptchaError').textContent = 'Please complete the CAPTCHA.';
        valid = false;
    }
    
    if (valid) {
        alert('Form submitted successfully!');
        // Redirect to another page after the alert is dismissed
        window.location.href = 'index-l.html';
    }
});