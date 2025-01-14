// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    //here its Get the form element from the login page 
    const form = document.querySelector('form');

    //here Listen for form submission
    form.addEventListener('submit', async function (e) {
        e.preventDefault(); // Prevent default form submission

        //then here its Get form values from the user input
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        // Prepare the data to be sent in the POST request
        const loginData = {
            email: email,
            password: password
        };

        //then its Send the data to the backend (API) through the POST method
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                // here its set the content type to json
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData)
            });

            // Handle the response
            const data = await response.json();

            if (response.ok) {
                //here If login is successful, you might want to redirect the user to another page which is cart page
                alert('Login successful!');
                window.location.href = '/cart.html'; // here its redirect to a cart page
            } else {
                // Show error message from the backend if gthe email or password is invalid
                alert(data.message || 'Invalid email or password.');
            }
        } catch (error) {
            //show the error message if the serve is not connected
            console.error('Error:', error);
            alert('Failed to connect to the server. Please try again later.');
        }
    });
});
