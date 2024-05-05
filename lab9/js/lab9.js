/*
    lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
    Requirements: jQuery must be loaded for this script to work.
    Author: Isaiah Arreola
    Date 2024
*/
$(document).ready(function() {

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$(document).on('click', '#button-challenge', function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// add button to purpose section
$("#purpose").append("<button id='button-purpose'>Make Special</button>");

// add a click listener to the purpose button
$(document).on('click', '#button-purpose', function(){
    // now add (or subtract) the "special" class to the section
    $("#purpose").toggleClass("special");
});

// add button to results section
$("#results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the results button
$(document).on('click', '#button-results', function(){    
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});

});