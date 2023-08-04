// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Create a new FormData object
    

    // Get the form elements and add their values to FormData
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    
    for (const [key, value] of formData.entries()) {
        console.log(key, value);
    }
    




}

// Add event listener to the submit button
document.getElementById('submit_btn').addEventListener('click', handleSubmit);