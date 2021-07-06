// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {
  return Math.random() * 10;
}
//  Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):



// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
  return w1.concat(w2);
}
// The concat() method is used to join two or more strings.



function concatenate(firstWord, secondWord, thirdWord) {

let x = firstWord + secondWord + thirdWord;
return x
}
let x = concatenate('code ', 'your ', 'future');
console.log(x);


function concatenate(firstWord, secondWord, thirdWord) {

  let y = firstWord + secondWord + thirdWord;
  return y
  }
  let y = concatenate('I ', 'Like ', 'Pizza');
  console.log(y);



  function concatenate(firstWord, secondWord, thirdWord) {

    let z = firstWord + secondWord + thirdWord;
    return z
    }
    let z = concatenate('I ', 'am ', 13);
    console.log(z);
// test(
//   "concatenate function - case 1 works",
//   concatenate('code', 'your', 'future'),
//   "code your future"
// );

/* ======= TESTS - DO NOT MODIFY =====
There are some Tests in this file that will help you work out if your code is working.
To run these tests type `node 3-function-output` into your terminal
*/

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test(
  "concatenate function - case 1 works",
  concatenate('code', 'your', 'future'),
  "code your future"
);
test(
  "concatenate function - case 2 works",
  concatenate('I', 'like', 'pizza'),
  "I like pizza"
);
test(
  "concatenate function - case 3 works",
  concatenate('I', 'am', 13),
  "I am 13"
);
