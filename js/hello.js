
/* Send a customized message based on time
*/
console.log("Greetings.js");

// get the date and time 
var today = new Date();
var hoursNow = today.getHours();

// display the greeting message 
var greetings = "";
if (hoursNow <= 12){
  greetings = "Hello there";
}else{
  greetings = "Bye";
}


// write to the document 
document.write(greetings);