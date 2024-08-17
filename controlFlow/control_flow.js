let userRole = "admin";
let accessLevel;

//assigning different roles in the if…else condition 
//to check if userRole is equal to "admin"or not.
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

//Defining variables and nested if…else statementd 
//for isLoggedIn and userMessage
let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
//If User is not logged in isLoggedIn === false
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

//Defining variables and switch statement 
//for userType and userCategory
let userType = "subscriber";
let userCategory;

// implement and execute the switch statement 
//to evaluate the value of userType 
//by providing different case values
switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager" :
        userCategory = "Manager";
        break;
    case "subscriber" :
        userCategory = "Subscriber";
        break;
    default :
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);