var kv = require('../person') // => {};
// var c = require('colors/safe');

var assert = require('chai').assert;

describe('person.fullName', function() {
  it('returns the default 1st and last name', function() {
    assert.equal(kv.fullName(), 'Khurram Virani');
  })

  it('returns the the given first and last names', function() {
    kv.firstName = 'K'
    kv.lastName = 'V'
    assert.equal(kv.fullName(), 'K V');
  })
})


// TEST CODE HERE
// if (kv.fullName() === 'Khurram Virani') {
//   console.log('👍👍👍');
// } else {
//   console.log(c.red('FAIL'));
// }
// console.log('From index.js Fullname should be K V: ' + kv.fullName());


// var kv = {}
// console.log(kv);

// kv();

// console.log('hello');