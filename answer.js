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
