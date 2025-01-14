document.addEventListener('DOMContentLoaded', function () {

    // Select the form and the necessary elements
    const contactForm = document.querySelector('.contact-form');
    const nameInput = contactForm.querySelector('input[name="name"]');
    const emailInput = contactForm.querySelector('input[name="email"]');
    const messageInput = contactForm.querySelector('textarea[name="message"]');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    
    // Success and Error Message Containers
    const successMessage = document.createElement('p');
    successMessage.style.color = 'green';
    const errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    
    // Handle form submission
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Reset previous messages
        successMessage.textContent = '';
        errorMessage.textContent = '';
        
        // Validate the form inputs
        if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
            errorMessage.textContent = 'Please fill in all fields.';
            contactForm.appendChild(errorMessage);
            return; // Stop further processing if validation fails
        }

        // If inputs are valid, create the data object
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };

        // Send the data to the backend using fetch
        fetch('http://localhost:3000/submit_form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Your message has been sent successfully!') {
                successMessage.textContent = data.message;
                contactForm.appendChild(successMessage);
                // Clear the form fields
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
            } else {
                errorMessage.textContent = data.message;
                contactForm.appendChild(errorMessage);
            }
        })
        .catch(error => {
            errorMessage.textContent = 'There was an error sending your message. Please try again later.';
            contactForm.appendChild(errorMessage);
        });
    });
});
