#! /usr/bin/env node

var primes = require("./primes.js")

// Get the argument from the command line (set it to 10 if no argument)
var tblSize = parseInt(process.argv[2] || "10", 10),
    primeList  = primes.getPrimes(tblSize),
    tableData  = primes.multiplicationTable(primeList)

// A function to define our final 2d array for displaying the results
function matrix( rows, cols, defaultValue){
    var arr = [];
    for(var i=0; i < rows; i++){
        arr.push([]);
        arr[i].push( new Array(cols));
        for(var j=0; j < cols; j++){
            arr[i][j] = defaultValue;
        }
    }
return arr;
}

// Creating the final 2d array and inputting the correct data
var tableFinal = matrix(tblSize+1, tblSize+1, ' ');
for(var i=1; i < tblSize+1; i++){
    // This inserts our top row of prime numbers
    tableFinal[0][i] = primeList[i-1];
    for(var j=1; j < tblSize+1; j++){
        // This inserts our first column of prime numbers
        tableFinal[j][0] = primeList[j-1];
        // This inserts the multiplication of the primes
        tableFinal[i][j] = tableData[i-1][j-1];
    }
}
// Display our final table
console.log(tableFinal);