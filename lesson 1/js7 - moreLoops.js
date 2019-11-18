// PRINT ON THE CONSOLE ALL THE EVEN NUMBERS FROM 2 TO 100


for(var i = 1; i <= 100; i++) {
    var remainder = i % 2;
    // console.log(i);
    // console.log(remainder);
    // console.log("---------");
  
    if (remainder == 0) {
      console.log(i);
    }
  }
  
  for(var i = 0; i <= 100; i+=2) {
    console.log(i);
  }
  
  
  // ASSIGNMENT OPERATORS
  
  //     = 
  //     +=
  //     ++   
  
  var number = 7;
  
  number = number + 1;
  number += 1;
  number++;
  
  console.log(number);