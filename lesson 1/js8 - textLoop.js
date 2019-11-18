var firstName = "Helder";
var lastName = "Pereira";

var fullName = firstName + " " + lastName;
var greeting = "Hello I'm " + fullName;

var counter = 0;
for (var i = 0; i < greeting.length; i++) {
  console.log(greeting[i]);
  if (greeting[i] == "e") {
    counter++;
  }
}

console.log(counter);