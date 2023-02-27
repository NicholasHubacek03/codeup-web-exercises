let dogs = ["Misty","Misty", "Nebula", "Shadow", "Hubert"]
//will add item to the start of your array
console.log(dogs.unshift("robert"));
// will add item to the end of the array
dogs.push("hub")
console.log(dogs)
// will remove item from the end of the array
dogs.pop();
//will remove item from the start of the array
dogs.shift();
// console.log(dogs)

//will return index of passed in argument at it's first instance
// if argument doesn't exist, then it will return -1
let index = dogs.indexOf("Misty");
console.log(index);

// will return last index instance of passed in argument
// if argument doesn't exist, then it will return -1
let lastIndex = dogs.lastIndexOf("Misty");
console.log(lastIndex);


// will return a copy of your array
// you can pass in two arugments, the start and ending index
//this will return only that portion between the indexes of that
// FIRST ARGUMENT (YOUR START INDEX) IS INCLUSIVE, SECOND ARGUMENT(
let newDogArray = dogs.slice(1, 3);
console.log(newDogArray);
// THIS WILL STILL BE THE OG DOG ARRAY, the slice methond does not reason
console.log(dogs);

// reverse an array
let reverseDog = dogs.reverse();
console.log(reverseDog);

// sort array by alphanumeric
let alphanumeric = dogs.sort();
console.log(alphanumeric)

// converting string into array
let animals = "dogs,cats,hedgehogs"
let animalsArray = animals.split(",");
console.log(animalsArray)

// convert array into string
let animalString = animalsArray.join(" ");
console.log(animalString);