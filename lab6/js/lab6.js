
// Author: Isaiah Arreola
// Created: 25 April

// Define Variables
myTransport = ["Gillig Santa-Cruz-Metro", "Rides from my mom", "Rides from my siblings"];

// create an object for my main ride
myMainRide = {
    make: "Gillig",
    model : "Santa-Cruz-Metro",
    color : "White",
    ownit : "No",
    year : 2021,
    // we can define a function within our object (called a methods)
    // that uses the value of year above (using this.year)
    age : function(){
        return 2024 - this.year;
    }
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
// this little tricks allows us to write an object to the documnet
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");