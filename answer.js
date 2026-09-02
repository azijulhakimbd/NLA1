// Question 01
function describeValue(value) 
{ return `${typeof value} | ${value ? "truthy" : "falsy"}`; }

// Question 02
function getDayType(day)

 { switch (day.toLowerCase()) 
    {
         case "friday": 
         case "saturday": 
           return "Weekend"; 

         case "sunday": case "monday": 
         case "tuesday": case "wednesday": 
         case "thursday": 
           return "Working Day"; 
         default: 
           return "Invalid Day"; 
    }
}

// Question 03
function validateUsername(username) { 
    if (username.length < 4) { 
        return "Too Short"; 
    } else if (username.includes(" ")) { 
        return "No Space Allowed"; 
    } else if (username.toLowerCase().includes("admin")) { 
        return "Reserved Word"; 
    } else { 
        return "Available"; 
    } 
}


// Question 04
function getCngFare(distance, isNight = false, waitingMinutes = 0) { 
    let fare = 50; 
    if (distance > 2) { 
        fare = fare + (distance - 2) * 15; 
    } 
    fare = fare + waitingMinutes * 2;
     if (isNight) {
         fare = fare * 1.2; 
        } 
        return fare; 
    }

   