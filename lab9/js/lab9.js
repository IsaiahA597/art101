/*
    lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
    Requirements: jQuery must be loaded for this script to work.
    Author: Isaiah Arreola
    Date 2024
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// add button to purpose section
$("#purpose").append("<button id='button-purpose'>Make Special</button>");

// add a click listener to the purpose button
$("#button-purpose").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#purpose").toggleClass("special");
});

// add button to results section
$("#results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the results button
$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});
