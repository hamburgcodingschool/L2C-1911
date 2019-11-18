// var a = 9;
// var b = 7;

// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

var a = 19;
var b = 10;
var c = 25;

if (a > b) {
  if (a > c) {
    console.log(a);
  } else {
    console.log(c);
  }
} else {
  if (b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}


// DIFFERENT SOLUTION

var highest = 0;
if (a > b) {
  highest = a;
} else {
  highest = b;
}

if (c > highest) {
  highest = c;
}

console.log(highest);