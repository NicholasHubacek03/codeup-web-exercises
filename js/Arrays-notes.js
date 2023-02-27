// // let name = "bob";
// //delcaring array
// let myFirstArray = [true, "name", false, 12, 33 ,44];
// // getting length
// console.log(myFirstArray.length);
// // index of array
// console.log('My 3rd index is ' + myFirstArray[0])
// iterating through arrays
let namesArray = ["Josh", "Rob", "Ross", "Charles", "Will"];
// loop through the array and log the values
// for (let i = 0; i < name.length; i++) {
//     let greeter = "Hello " + name[i];
//     console.log(greeter);
// }

// loop through array and log values via For-Each loop
namesArray.forEach(function (nameCurrentIndex){
    let greeter = "Hello " + nameCurrentIndex;
    console.log(greeter);
})


