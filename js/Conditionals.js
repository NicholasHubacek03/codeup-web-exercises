console.log("Testing")

let age =-2;

if (age >= 16) {
    console.log("old enough to drive")
}else if (age > 0 && age <=16)
{
    console.log("not old enough")
} else {
    console.log(" Not a valid age")
}


// if/else if/else example:

let daysOfTheWeek = prompt("enter a day of the week")

// if(daysOfTheWeek === "Monday"){
//     console.log(" I hate " + daysOfTheWeek)
// }else if(daysOfTheWeek == "Tuesday"){
//     console.log("Tuesday's are better")
// } else if (daysOfTheWeek === "Wednesday") {
//     console.log(daysOfTheWeek + " is fun! ")
// }    else if(daysOfTheWeek === "Thursday"){
//     console.log("Thursday")
// }else if (daysOfTheWeek === "Friday"){
//     console.log("Friday after work are fun!")
// } else{
//     console.log("Not valid day of the week")
// }

if (daysOfTheWeek === "Monday" || daysOfTheWeek === "Tuesday" || daysOfTheWeek === "Wednesday" || daysOfTheWeek === "Thursday"){
    console.log(daysOfTheWeek + " is my favorite day!")
} else {
    console.log("Not a valid day!")
}

let num = 42;

if(typeof num === "string"){
    console.log("type of 'num' is a Number")
} else {
    console.log("typeof is not a number")
}

//another example of if/else if/else
//
// let username = "user";
// let password = "password";

// let userUsername = prompt("Enter your username");
// let userPassword = prompt("Enter your password");

// if(username === userUsername && password === userPassword) {
//     console.log("successfully logged in")
// }else if (username !== userUsername && password !== userPassword){
//         console.log("Invalid username and password")
// } else if (username !== userUsername){
//     console.log("Invalid username")
// } else if (password !== userPassword){
//     console.log("Invalid password")
// }else if(username !== userUsername && password !== userPassword){
//     console.log("Invalid username and password")
// }

// password >= 6 character
// password must not include a space
let password = prompt("Please enter a password");

if(password.length >= 6) {
    console.log("Valid password")
} else {
    console.log("password hasn't met the requirement")
}

// Ternary operators
// condition ? value1 ; else statement runs

let name = "Johnny"
let greeting = name === "Bob" ? "Hello " + name : " Hello stranger";
console.log(greeting)

// if(name === "Bob"){
//     console.log("Hello " + name)
// }else {
//     console.log("Hello Stranger!")
// }

// Switch Statement
let grade = "B";

switch (grade) {
    case "A":
        console.log("Way to go!");
        break;
    case "B":
        console.log("Good Work!");
        break;
    case "C":
        console.log("Not bad!");
        break;
    case "D":
        console.log("keep trying!");
        break;
    case "F":
        console.log("oh-oh! Not good")
        break;
    default:
        console.log(grade + " is not a valid letter grade!");
}

if(grade = "A"){
    console.log("Way to go!");
} else if (grade = "B"){
}