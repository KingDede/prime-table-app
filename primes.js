
/* 
    Calculates the next prime number after the prime number passed to it
    NOTE: The number passed to nextPrime must be prime itself or 0, 1, 2
*/
function nextPrime(value) {
    if (value > 2) {
        var i, q;
        do {
            i = 3;
            value += 2;
            q = Math.floor(Math.sqrt(value));
            while (i <= q && value % i) {
                i += 2;
            }
        } while (i <= q);
        return value;
    }
    return value === 2 ? 3 : 2;
}
/*
    Calculates the first (n) prime numbers and returns them as an array
*/
function getPrimes (n) {
    var value, result = [];
    for (var i = 0; i < n; i++) {
        value = nextPrime(value);
        result.push(value);
    }
    return result;
}
/*
    From an array of primes returns a 2d array of the multiplication table.
*/
function multiplicationTable(primes) {
    var tbl = [];
    for (var i=0; i < primes.length; i++) {
        tbl.push([]);
        tbl[i].push(new Array(primes.length));
        for (var j=0; j < primes.length; j++) {
            tbl[i][j] = primes[i]*primes[j];
        }
    }
    return tbl;
}

module.exports = {getPrimes: getPrimes, multiplicationTable: multiplicationTable}
