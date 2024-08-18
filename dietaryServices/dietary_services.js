function diateryAccess()
{
    var person = prompt("Enter your position eg:Employee");

    if(person === "Employee"){
        let authorisation = "Dietary Services";
        console.log ("you have access to", authorisation);
    }else if (person === "Enrolled Member"){
        let authorisation = "Dietary Services and one-on-one interaction with a dietician";
        console.log ("you have access to", authorisation);
    }else if (person === "Subscriber"){
        let authorisation = "Dietary Services";
        console.log ("you have access to", authorisation , "only");
    }else {
        console.log ("you need to enroll or at least subscribe first to avail this facility")
    }
}    