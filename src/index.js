module.exports = function reverse (n) {

let array = [];

// create array (nPositiveArr) from absolute value of a number n
nPositiveArr = Array.from(String(Math.abs(n)), Number); 

// delete nulls at the end of number in array (nPositiveArr)
for (let i=(nPositiveArr.length-1); i>=0; i--) {
  if (nPositiveArr[i] == 0) {
    console.log(nPositiveArr[i]);
    delete (nPositiveArr[i]);     
  } else break;    
}

// console.log(+nPositiveArr.join(''));

// create new array with reversed array nPositiveArr. Use + and .join('') to create number and delete empty position in array
for (let j=(+nPositiveArr.join('').length-1); j>=0; j--) {
  let newArr = array.push(nPositiveArr.join('')[j]);  
}

// return number from array nPositiveArr
return(+array.join(''));

}
