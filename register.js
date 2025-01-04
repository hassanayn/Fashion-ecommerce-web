// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.querySelector('form');

    // Listen for form submission
    form.addEventListener('submit', async function (e) {
        e.preventDefault(); // Prevent default form submission

        // Get form values
        const fullName = document.querySelector('#username').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const confirmPassword = document.querySelector('#confirm-password').value;

        // Simple client-side validation
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Prepare the data to be sent in the POST request
        const formData = {
            full_name: fullName,
            email: email,
            password: password,
            confirm_password: confirmPassword
        };

        // Send the data to the backend (API)
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // Handle the response
            const data = await response.json();

            if (response.ok) {
                // Show success message
                alert('Registration successful!');
            } else {
                // Show error message from the backend
                alert(data.message || 'An error occurred during registration.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to connect to the server. Please try again later.');
        }
    });
});




//forgot js

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const email = document.querySelector("#email").value;
    const newPassword = document.querySelector("#new-password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;
  
    fetch("/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        newPassword: newPassword,
        confirmPassword: confirmPassword
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        alert(data.message);
      }
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
  });
  