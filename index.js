document.getElementById('checkBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    const emailInput = document.getElementById('in');
    const errorMessage = document.getElementById('error-message');
    const emailValue = emailInput.value.trim();
    
    if (!validateEmail(emailValue)) {
      errorMessage.textContent = "Invalid email address.";
      errorMessage.style.color = "red";
      return;
    }

    if (isRoleBasedEmail(emailValue)) {
      errorMessage.textContent = "Role-based emails (like admin@) are not allowed.";
      errorMessage.style.color = "red";
      return;
    }

    // Display success message for valid email
    errorMessage.textContent = "Valid email!";
    errorMessage.style.color = "green";
});

function validateEmail(email) {
    // Simple regex for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isRoleBasedEmail(email) {
    // List of common role-based prefixes
    const roleEmails = [
        "admin", "support", "info", "sales", "contact", "billing",
        "help", "hostmaster", "postmaster", "webmaster"
    ];

    // Extract the part before '@' in the email
    const emailPrefix = email.split('@')[0].toLowerCase();

    // Check if the email prefix matches any role-based email
    return roleEmails.includes(emailPrefix);
}

// SMTP and MX Record Checks should be done server-side or via an API
// Example APIs: https://mailboxlayer.com/ or https://verifalia.com/
