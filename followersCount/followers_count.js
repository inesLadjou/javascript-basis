let count = 0; // Initialize count to 0
function increaseCount() {
  count++ // Increment the count by 1
  displayCount(); // Display the count
  checkCountValue(); // Check count value and display messages
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

//function to display count in the HTML element with the ID 
//countDisplay and updates its content 
//to reflect the current count value.
function displayCount() {
<<<<<<< HEAD
document.getElementById('countDisplay').innerHTML= count; // Display the count in the HTML
=======
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
>>>>>>> 31ae7cfb98f43061cabc6aaeafd050e97595eb11
}

//function to reset the count to 0
function countReset(){ 
  count = 0; // reset count to 0
  displayCount (); // show the reseted count in the html
  alert ("your Followers count has been reset");
}
