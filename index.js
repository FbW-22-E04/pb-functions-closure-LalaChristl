// 1. In your own words, define closure (1-2 sentences).

// Answer:
// A closure is a function that refers to variables in the outer scope from the inner scope.
// 


function personalDice(name){
    return function(){
        // generate random number between 1 and 6
      const newRoll = Math.floor(Math.random() * 6) + 1;
      console.log(`${name} rolled a ${newRoll}`)
    }
  }
  
  const dansRoll = personalDice("Dan");
  
  const zoesRoll = personalDice("Zoe");
  
  
  dansRoll();
  dansRoll();

//   2. Study the following code, then answer the questions below.

//   * a. Where is closure used in this code? How can you tell?

// Answer:
// The closure is used at the inner function, you can tell because it's variable is being called from the parent function.

// * b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?

// Answer:
// Is always going to be a number between 1 & 6 but will output random number between 1 & 6.


// * c. What is the lexical scope of `newRoll`? 

// Answer:
// The lexical scope of newRoll is in the inner scope because that is where it was created.


// 3. Write a function that would allow you to do this using a closure.

function createBase(num) {
    return function (inner) {
        return inner + num
    }
}

const addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));
addSix(10); // returns 16
addSix(21); // returns 27
