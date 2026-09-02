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
