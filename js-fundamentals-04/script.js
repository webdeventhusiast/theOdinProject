////// Repeat String

/*
/// Solution 1

function repeatStr(str, n) {
    for (let i = 0; i < n; i++) {
        console.log(str);
    }
}

repeatStr('Hello', 5);


/// Solution 2

let repeatStr = (str, n) => {
  let strArray = [];
  
  for (let i = 0; i < n; i++) {
    strArray.push(str);
  }
  
  return strArray.join('');
}

console.log(repeatStr('hey', 3));
*/


////// Repeat String

/*
let reverseString = (str) => {
    let strArray = str.split('');
    return strArray.reverse().join('');
}

console.log(reverseString('hello there'));
*/


////// Remove from array

/*
let removeFromArray = (arr, val) => {
    let strIndex = arr.indexOf(val);
    arr.splice(strIndex, 1);
    return arr;
}
  
console.log(removeFromArray([1,2,3,4], 3));
*/


////// Sum All

/*
let sumAll = (a, b) => {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAll(1, 4));
*/


////// Leap Years

/*
let isLeapYear = (year) => {
  
    if ( (year % 4) === 0) {
      if ( (year % 100) === 0) {
        if ( (year % 400) === 0) {
          return true;
        } 
        return false;
      }
      return true;
    }
    return false;
  
  }
  
  console.log(isLeapYear(1984));
  console.log(isLeapYear(1800));
  console.log(isLeapYear(1600));
  console.log(isLeapYear(2001));
  console.log(isLeapYear(1983));
  console.log(isLeapYear(1700));
*/


////// tempConversion

let ftoc = (temp) => {
    let celsius = (temp - 32) * 5 / 9;
    return celsius.toFixed(1);
}  
console.log(ftoc(100));

let ctof = (temp) => {
    let farenheit = (temp * 9 / 5) + 32;
    return farenheit.toFixed(1);
}
console.log(ctof(37.8));
