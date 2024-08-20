function submitFeedback() {
    // Declare variables and assign values from 
    //the respective HTML input elements using 
    //getElementById.
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Show a message when the user submits the form.
    alert('Thank you for your valuable feedback');

    // Fetch the user feedback information and 
    //display it in the respective elements.
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Make the user info section visible.
    document.getElementById('userInfo').style.display = 'block';
}

// Fetch the submit button element and assign the 
//submitFeedback function to its onclick event.
const submitButton=document.getElementById('submitBtn');
submitButton.onclick = submitFeedback; // Assign the function reference, not its execution

// Implement key press to submit feedback when 
//the Enter key is pressed.
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
});
