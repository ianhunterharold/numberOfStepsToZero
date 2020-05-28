
var count =0;
const numberOfSteps  = function(num) {
  
  if (num > 0){
    if (num % 2 === 0){
      count++;
      num = num/2;
      } else if (num % 2 === 1){
      count++;
      num = num - 1;
    }
    numberOfSteps(num);
  }
  return count;
};
const numb = 8;
numberOfSteps(numb);

// solve as a human
// if number is even, divide by two
// if number is odd, minus one
// keep a count of how many times you have to do that

// solve as a developer
// % 2 === 0 divide by 2
// count++
// % 2 ===1 minus one 
// count++
// use reduce ? maybe? even though reduce is for an array
// recursive until we obtain zero.
