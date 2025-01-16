//here it Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.querySelector('form');

    //here it  Listen for form submission
    form.addEventListener('submit', async function (e) {
        
      // Prevent default form submission
      e.preventDefault();

        // here it Get form values from the font end on the user input
        const fullName = document.querySelector('#username').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const confirmPassword = document.querySelector('#confirm-password').value;

        // here is Simple client-side validation for the form field it checks if the password matches the confirm password
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        //then here Prepare the data to be sent in the POST request or (API) in the backend
        const formData = {
            full_name: fullName,
            email: email,
            password: password,
            confirm_password: confirmPassword
        };

        //here it  Send the data to the backend (API) using the POST method
        //here we creste conectiion with backend through API
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            //here its Handle the response from the server / backend API
            const data = await response.json();

            if (response.ok) {
                // Show success message if the response is ok
                alert('Registration successful!');
            } else {
                // Show error message from the backend if the response it not ok
                alert(data.message || 'An error occurred during registration.');
            }
        } catch (error) {
          // here it shows the error message if the server is not connected
            console.error('Error:', error);
            alert('Failed to connect to the server. Please try again later.');
        }
    });
});




//here it is the forgot js or reset password javascript

// wait for the document to be full loaded
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    //here its get the form values entered by the user or customer
    const email = document.querySelector("#email").value;
    const newPassword = document.querySelector("#new-password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;
  
    //here its send the data to the backend through POST method
    //here we create connection btn frontend and backend through API
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
    //here its handle the response from the server
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        //here its shows the succes message if gthe respomse its ok
        alert(data.message);
      }
    })
    .catch(error => {
      //here its shows the error message if the server is not connected
      alert("Error: " + error.message);
    });
  });
  