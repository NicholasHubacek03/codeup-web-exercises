console.log("Hello from external Javascript")
alert("Welcome to my Website!");
console.log(alert);
//let color = prompt("What is your favorite color?")
//alert("Great, " +  color  + " is my favorite color too!")

let Little = Number(prompt(" How many day did you have The Little Mermaid?"))
let bb = Number(prompt("Okay, How long did you have the Brother Bear?"))
let Hercules = Number(prompt("Great, last one. How long did you have Hercules?"))
let Perday=3
let Total =(Little + bb + Hercules)* Perday
alert("Okay the total price will be " +  Total);
console.log(alert)

let google = Number(prompt("How many Hours did you work at Google?"))
google = (google * 350);
console.log(google);
let amazon = Number(prompt("How many hours did you work at Amazon?"));
amazon = (amazon * 380);
let facebook = Number(prompt("How many hours did you work at Facebook?"));
facebook =(facebook * 350)
let Hours =(google + amazon + facebook)
alert("The total you got this week " + Hours);
console.log(alert);

let isfull=confirm("Will the class be full?")
let isconflict=confirm("Will it conflict with her current schedule?")
alert(isfull && isconflict)

let moreitems=confirm("Do you have 2 or more items?")
let expired=confirm("is the offer expired")
let Premium=confirm("Are you a Premium Member?")
alert(moreitems && expired || Premium)












//"use strict";

//console.log("This is my external js file");
//let quantity = 3;
//console.log(quantity);

//let myAge = 25;
//console.log(myAge);

//alert("Hello welcome to my website");

//let submit = confirm(" Are you Sure?");
//console.log(submit)

//let age = prompt("What is your age?")
//alert(" you're! "  +  age )