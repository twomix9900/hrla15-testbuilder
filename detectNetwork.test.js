/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  it('Throws an error so it fails', function() {

  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    };
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = function(isTrue) {
    if (!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {

  var expect = chai.expect;
  for (var prefix = 51; prefix <= 55; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 16', function() {
        expect(detectNetwork(prefix.toString() + '12345678901234')).to.equal('MasterCard');
      });
    })(prefix);
  }
});

describe('Discover', function() {
//((quadPrefix === 6011 || (triPrefix > 643 && triPrefix < 650) || doublePrefix === 65) && (cardNumber.length === 16 || cardNumber.length === 19))
  var expect = chai.expect;

  for (var prefix = 644; prefix < 650; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 16', function() {
        expect(detectNetwork(prefix.toString() + '1234567890123')).to.equal('Discover');
      });
    })(prefix)
  }

  for (var prefix = 644; prefix < 650; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 19', function() {
        expect(detectNetwork(prefix.toString() + '1234567890123456')).to.equal('Discover');
      });
    })(prefix)
  }

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011345678901234')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011345678901234567')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6534567890123456')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6534567890123456789')).to.equal('Discover');
  });

});

describe('Maestro', function() {
//   ((quadPrefix === 5018 || quadPrefix === 5020 || quadPrefix === 5038 || quadPrefix === 6304) && (cardNumber.length > 11 && cardNumber.length < 20))
  var expect = chai.expect;
  for (var length = 12; length < 20; length++) {
    (function(length) {
      it('has a length of ' + length.toString() + ' and a prefix of 5018', function () {
        expect(detectNetwork('501856789012345678901234567890'.split('').slice(0 , length).join(''))).to.equal('Maestro');
      });
    })(length)
  }

  for (var length = 12; length < 20; length++) {
    (function(length) {
      it('has a length of ' + length.toString() + ' and a prefix of 5020', function () {
        expect(detectNetwork('502056789012345678901234567890'.split('').slice(0 , length).join(''))).to.equal('Maestro');
      });
    })(length)
  }

  for (var length = 12; length < 20; length++) {
    (function(length) {
      it('has a length of ' + length.toString() + ' and a prefix of 5038', function () {
        expect(detectNetwork('503856789012345678901234567890'.split('').slice(0 , length).join(''))).to.equal('Maestro');
      });
    })(length)
  }

  for (var length = 12; length < 20; length++) {
    (function(length) {
      it('has a length of ' + length.toString() + ' and a prefix of 6304', function () {
        expect(detectNetwork('630456789012345678901234567890'.split('').slice(0 , length).join(''))).to.equal('Maestro');
      });
    })(length)
  }
});


describe('China UnionPay', function () {
  var expect = chai.expect;

  for (var prefix = 622126; prefix < 622926; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 16', function () {
        expect(detectNetwork(prefix.toString() + '7890123456')).to.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 622126; prefix < 622926; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 17', function () {
        expect(detectNetwork(prefix.toString() + '78901234567')).to.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 622126; prefix < 622926; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 18', function () {
        expect(detectNetwork(prefix.toString() + '789012345678')).to.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 622126; prefix < 622926; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 19', function () {
        expect(detectNetwork(prefix.toString() + '7890123456789')).to.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 624; prefix < 627; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 16', function () {
        expect(detectNetwork(prefix.toString() + '4567890123456')).to.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 624; prefix < 627; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 17', function () {
        expect(detectNetwork(prefix.toString() + '45678901234567')).to.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 624; prefix < 627; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 18', function () {
        expect(detectNetwork(prefix.toString() + '456789012345678')).to.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 624; prefix < 627; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 19', function () {
        expect(detectNetwork(prefix.toString() + '4567890123456789')).to.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 6282; prefix < 6289; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 16', function () {
        expect(detectNetwork(prefix.toString() + '567890123456')).to.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 6282; prefix < 6289; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 17', function () {
        expect(detectNetwork(prefix.toString() + '5678901234567')).to.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 6282; prefix < 6289; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 18', function () {
        expect(detectNetwork(prefix.toString() + '56789012345678')).to.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 6282; prefix < 6289; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 19', function () {
        expect(detectNetwork(prefix.toString() + '567890123456789')).to.equal('China UnionPay');
      });
    })(prefix)
  }

})

describe('Switch',function (){
  var expect = chai.expect;

  it('has a prefix of 4903 and a length of 16', function () {
    expect(detectNetwork('4903567890123456')).to.equal('Switch');
  });
  it('has a prefix of 4903 and a length of 18', function () {
    expect(detectNetwork('490356789012345678')).to.equal('Switch');
  });
  it('has a prefix of 4903 and a length of 19', function () {
    expect(detectNetwork('4903567890123456789')).to.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 16', function () {
    expect(detectNetwork('4905567890123456')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 18', function () {
    expect(detectNetwork('490556789012345678')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 19', function () {
    expect(detectNetwork('4905567890123456789')).to.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 16', function () {
    expect(detectNetwork('4911567890123456')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 18', function () {
    expect(detectNetwork('491156789012345678')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 19', function () {
    expect(detectNetwork('4911567890123456789')).to.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 16', function () {
    expect(detectNetwork('4936567890123456')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 18', function () {
    expect(detectNetwork('493656789012345678')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 19', function () {
    expect(detectNetwork('4936567890123456789')).to.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 16', function () {
    expect(detectNetwork('6333567890123456')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 18', function () {
    expect(detectNetwork('633356789012345678')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 19', function () {
    expect(detectNetwork('6333567890123456789')).to.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 16', function () {
    expect(detectNetwork('6759567890123456')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 18', function () {
    expect(detectNetwork('675956789012345678')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 19', function () {
    expect(detectNetwork('6759567890123456789')).to.equal('Switch');
  });

   it('has a prefix of 564182 and a length of 16', function () {
    expect(detectNetwork('5641827890123456')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 18', function () {
    expect(detectNetwork('564182789012345678')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 19', function () {
    expect(detectNetwork('5641827890123456789')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 16', function () {
    expect(detectNetwork('6331107890123456')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 18', function () {
    expect(detectNetwork('633110789012345678')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 19', function () {
    expect(detectNetwork('6331107890123456789')).to.equal('Switch');
  });
})
