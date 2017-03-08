var primes = require("../primes.js"),
    expect = require("chai").expect;


describe("The Prime Number Generator", function(){

  it("should start at 2", function(){
    expect(primes.getPrimes(2)[0]).to.equal(2);
  });

  it("should have the correct first 10 primes", function(){
    expect(primes.getPrimes(10)).to.deep.equal([2,3,5,7,11,13,17,19,23,29]);
  });

  it("should have the correct primes at 9990", function(){
    expect(primes.getPrimes(10000).slice(9990, 10000)).to.deep.equal([104677, 104681, 104683, 104693, 
                                                                      104701, 104707, 104711, 104717, 104723, 104729]);
  });

  it("should have the correct primes at 999990", function(){
    expect(primes.getPrimes(1000000).slice(999990, 1000000)).to.deep.equal([15485761, 15485773, 15485783, 15485801, 15485807, 
                                                                           15485837, 15485843, 15485849, 15485857, 15485863]);
    this.timeout(10000);
  });
});

describe("The Multiplication Table", function(){

  it("should have the correct values for [3, 6, 8, 14]", function(){
	var input = [3, 6, 8, 14],
	output = [
        [9, 18, 24, 42],
        [18, 36, 48, 84],
        [24, 48, 64, 112],
        [42, 84, 112, 196],
    ]
    expect(primes.multiplicationTable(input)).to.deep.equal(output);
  })
});