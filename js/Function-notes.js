"use strict";
(function () {
    alert("Hello and welcome to my web page!");
})();
// --------------how to invoke(call) a function---------
//console.log("function notes");

//alert("This is my function notes!");

//----------------storing function----------------------

//let userDay = prompt ("How's your day been?");

//alert(" I'm having a " + userDay + " day too!");

// -----------defining a function--------------------
//function greeter(name, message){
    //----------^^^parameter^^^---------------
    //return "Hello " + name + " " + message + "."
//}
// -------------Calling a function
//alert(greeter("will", "have a great day"));
// ------------^^^^--argument--^^^^^^^^----------------

//function getName() {
    //let userName = prompt("what is your name?");
    //return userName;
//}
//     let message = prompt("What would you like your message to be?");
//
// console.log(greeter(getName(), message));

//----------------------Anonymous Functions---------------
//let greeter =function (name, message) {
    //----------^^^parameter^^^---------------
    //return "Hello " + name + " " + message + ".";
//}

//---------------Function scoping------------------
let height = "3ft";
function jump(){
  let name = "jim";
    return  name + " you jumped " + height;
}
console.log(jump());
console.log(name);
