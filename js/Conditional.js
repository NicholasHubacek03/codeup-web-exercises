"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color){
    if(color === "blue"){
        return(color + " is the color of the sky")
    }else if(color === "red"){
        return (color + " Strawberries are red")
    } else if (color === "cyan") {
        return color + (" I don't know anything about cyan")
    }else if(color === "orange") {
        return (color + " orange is a orange")
    }else if(color === "yellow") {
        return (color + " Yellow is a color of a Sunflower")
    } else{
        return (color + " Not a valid color")
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// switch (randomColor){
//     case "blue":
//         console.log(" Blue is the color of the sky");
//         break;
//     case "red":
//         console.log(" Strawberries are red")
//         break;
//     case "cyan":
//         console.log( " I don't know anything about cyan")
//         break;
//     case "orange":
//         console.log(" orange is a orange")
//         break;
//     case "yellow":
//         console.log(" Yellow is a color of a Sunflower")
//         break;
//     default:
//         console.log(randomColor + " Is not a color")

//}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
//let userAnswer = prompt("What is your favorite color?")
//alert(analyzeColor(userAnswer));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(luckyNumber,totalAmount){
//     let total
//     totalAmount=Number(prompt("What was the total of price today?"))
//     luckyNumber=Number(prompt("What is your lucky number?"))
//     total=(totalAmount / luckyNumber)
//     if (luckyNumber === 5){
//         return ("Your total price will be " + total +"$" )
//     }else if (luckyNumber === 4){
//         return ("Your total price will be " + total +"$")
//     } else if (luckyNumber === 3){
//         return ("Your total price will be " + total +"$")
//     }else if (luckyNumber === 2){
//         return ("Your total price will be " + total +"$")
//     }else if (luckyNumber === 1){
//         return ("Your total price will be " + total +"$")
//     }else{
//         return ("Your total price is not correct")
//     }
//
//
// }
// alert(calculateTotal())

function calculateTotal(luckyNumber, totalAmount){
    if(luckyNumber == 0){
        return totalAmount;
    }else if (luckyNumber === 1){
        return totalAmount - (.10 * totalAmount)
    }else if (luckyNumber === 2){
        return totalAmount - (.25 * totalAmount)
    }else if (luckyNumber === 3){
        return totalAmount - (.35 * totalAmount)
    }else if (luckyNumber === 4){
        return totalAmount - (.50 * totalAmount)
    } else if (luckyNumber === 5){
        return totalAmount - (1 * totalAmount)
    } else{
        return "Invalid lucky Number"
    }
}
console.log(calculateTotal(0, 100))
//return 100
console.log(calculateTotal(4, 100))
// return 50
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

let total = prompt("Enter a total bill amount")
alert("Your lucky number is " + luckyNumber + " Your total before discount is " + total + " Your total amount after discount is " + total + " Your total amount after discount is " + (calculateTotal(luckyNumber, total)).toFixed(2))
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//1. confirm -> ask the user to if they would like th enter a number
// 2. if confirm -> true; prompt the user to enter a number
// 3. if they confirm and enter a number
    //use 3 alerts
    // have a case for 0 because o is neither negative or positive && its neither even or odd
    //first alert -> if number is even or odd
    //second alert -> num + 100
    //third alert -> if num is - or +
//4. if incorrect data type use alert to info so

// let userConfirm = confirm("Would you like to enter a number?")
// if(userConfirm){
//     let userNum = parseFloat(prompt("Enter a number!"))
//     if(userNum === 0){
//         alert(userNum + " is neither even or odd")
//         alert(userNum + " + 100 is = " + (userNum+ 100))
//         alert(userNum + " is neither negative or positive")
//     }else if(!isNaN(userNum)){
//         // ternary operator
//         alert(userNum % 2 === 0 ? "Number is even" : "Number is odd")
//     } alert(userNum + " 100 is = " + (userNum + 100))
//     // ternary operator
//     alert(userNum > 0 ? "number is positive" : "number is negative")
// }else {
//     alert("Please enter a valid number")
// }

// code below is the refactor way using function

let userConfirm = confirm("Would you like to enter a number?")
    if (userConfirm) {
        let userNum = parseFloat(prompt("Enter a number!"));
        if(!userNum){
            alert("Invalid number!")
        }else {
            alert(evenOdd(userNum))
            alert(add100(userNum))
            alert(posNeg(userNum))
        }
    }
    // function to check if even/odd
function evenOdd(number){
        if(number % 2 ===0){
            return number + " is an even number"
        }else {
            return number + " Odd number"
        }
}
// function to check num + 100
function add100(number){
        return number + " + is 100 = " + (number + 100)
}
// function to check is negative or positive
function posNeg(number){
        if(number > 0)
    {
        return number + " is positive "
    }else {
        return number + " is negative "
        }

}