// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.querySelector('form');

    // Listen for form submission
    form.addEventListener('submit', async function (e) {
        e.preventDefault(); // Prevent default form submission

        // Get form values
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        // Prepare the data to be sent in the POST request
        const loginData = {
            email: email,
            password: password
        };

        // Send the data to the backend (API)
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData)
            });

            // Handle the response
            const data = await response.json();

            if (response.ok) {
                // If login is successful, you might want to redirect the user to another page
                alert('Login successful!');
                window.location.href = '/home.html'; // Example: redirect to a dashboard or home page
            } else {
                // Show error message from the backend
                alert(data.message || 'Invalid email or password.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to connect to the server. Please try again later.');
        }
    });
});
