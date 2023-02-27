(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let names = ["John", "Bob", "Robert", "Jordan"]
    console.log(names)
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    // console.log(names.length)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log("There are " + names.length + " In this name.")
    console.log("This name is the first " + names[0])
    console.log("This name is the second " + names[1])
    console.log("This name is the third " + names[2])
    console.log("This name is the fourth " + names[3])

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++){
        console.log(names[i] + " will go " + i)
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (nameCurrentIndex){
        let greeter = "Hello " + nameCurrentIndex;
        console.log(greeter);
    })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first(array) {
        console.log("The first element is " + array[0]);
        return array[0];
    }
    function second(array) {
        console.log("The second element is " + array[1]);
        return array[1];
    }
    function last(array) {
        var last = array.length - 1;
        console.log("The last element is " + array[last]);
        return array[last];
    }

    first(names);
    second(names);
    last(names);
})();
