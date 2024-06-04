// JavaScript code for interactions in your website

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Fetching form values
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Here you can implement code to handle form submission, like sending the data to a server
    // For now, let's just log the values to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clearing form fields after submission
    document.querySelector('input[name="name"]').value = '';
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
}

// Adding event listener to the form for submission
const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonText = event.target.innerText;

    // Depending on the button clicked, you can implement different actions
    if (buttonText.includes('CALL')) {
        // Implement call functionality here
        alert("Calling...");
    } else if (buttonText.includes('EMAIL')) {
        // Implement email functionality here
        alert("Sending email...");
    }
}

// Adding event listener to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
