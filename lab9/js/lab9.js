
// Author: Isaiah Arreola
// Created: 29 April
// License: Public Domain

function isEven(x){
    return (x % 2 == 0);
}

// test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [50, 67, 6, 18, 40, 155, 2000]
console.log("My array", array);

var result = array.map(isEven);
// should return [true, false, true, true, true, false, true]
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
    return x ** 0.5;
})
// should return [7.0710678118654755, 8.18535277187245, 2.449489742783178, 4.242640687119285, 6.324555320336759, 12.44989959733, 44.721359549995796]
console.log ("Squareroot of array:", result);