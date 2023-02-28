//-----------------------------------------------Making object custom object--------------------------------------------
// will define a new dog object by using new keyword to make a new Object prototype
// let dog = new Object();

// making an object using object literal notation ({} will define the new object)
let dog = {};

// console.log(typeof dog);
//------------------------------------------setting object properties(to custom objects)--------------------------------
// _______________dot notation------------------
// defining/initializing property named breed belonging to dog object(fist time we call/name the property is where the
// declaration happens)
dog.breed = "german shepard";
// calling object property
console.log(dog.breed);
// reinitializing breed property(you can do this by calling the object followed my property name)
dog.breed = "pit bull";
// we are displaying dog breed by referencing property
console.log(dog.breed);
//PROPERTIES ARE ONLY ACCESSIBLE THROUGH YOUR OBJECT
// the snippet bellow will through me an error, because I cannot access breed(property) without accessing dog(object) first
// console.log(breed);

// ______________array notation------------------
// the value inside of square bracket will be my property name
// I must have property name in double/single quotes in order to define the property
// Declaring/initializing color property for dog object using array notation
dog["color"] = "black";
// reinitializing my property value
dog["color"] = "gold";
// we are displaying dog color by referencing property
console.log(dog["color"]);


// you can set the properties of your object while initializing your object as shown below:
let cat = {
    name: "Finn",
    color: "black",
    gender: "female"
}

console.log(cat.color)
console.log(cat["gender"]);

//------------------------------------------Nesting value(data structures)--------------------------------
let shelter = {
    name: "myShelter",
    location: "dallas, tx",
    rating: 5,
    // nesting an array in our object
    shelteredAnimals: ["dogs", "cats", "birds", "hamsters"],
    // nesting a list objects within an array in our object
    employees: [
        {
            name: "Steve Jones",
            position: "clerk",
            skills: ["customer service, people ops"]
        },
        {
            name: "Howard Johnson",
            position: "janitor",
            skills: ["customer service, people ops"]
        },
        {
            name: "alicia chavez",
            position: "animal specialist",
            skills: ["customer service, people ops"]
        },
    ],
    // nesting an object in our object
    manager: {
        name: "Jordy Muniz",
        position: "team operator",
    }
}

// accessing manager name
console.log(shelter.manager.name);
// accessing first index of sheltered animal within shelter object
console.log(shelter.shelteredAnimals[0]);
// accessing first employee name
console.log(shelter.employees[0].name);
// accessing first employee first skill
console.log(shelter.employees[0].skills[0]);

shelter.employees.forEach(function (employee){
    console.log("good morning " + employee.name);
    employee.skills.forEach(function (skill){
        console.log("your skill set is " + skill)
    })
})

//------------------------------------------Assigning functions to objects---------------------------------------------
//assigning function to cat object as property(this function is now a method because it belongs to an object)
// cat.meow = function (){
//     alert("MEOW");
// }
// console.log(cat)
//
// // calling our meow function by accessing our cat object(needs () after function name in order to call function)
// cat.meow();

//-------------------------------------------------This Keyword--------------------------------------------------------

cat.meow = function (){
    // this = cat
    alert(this.name + " goes MEOW ");
}

cat.meow();


// -------------------------------------------------extra(storing function as property use case)-----------------------
let user = {
    userName: "jordysol96",
    email: "jordy.muniz@codeup.com",
    password: "password",
    greeter: function (){
        alert("hello " + this.userName + " welcome to your batcave :)")
    }
}

user.greeter();