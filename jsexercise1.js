// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

var sum = (function (a, b) {
var total = (a + b);
  return total;
};
 
// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
var avg = function (a, b, c) {
  var mean = (a + b + c) / 3;
      return mean;
};



// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length
var getLength = function (story){
  var n = story.length;
    return n;
  };
  getLength ("Baseball is the greatest sport");
   console reads 30 when tested.


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

  var greaterThan = function (a, b) { 
    
    if (b > a){
      return ('true')
      }
      else if (a <= b) {
      return ('false')
   }
   
   }; 
  


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
  
  var greet = function (name) {
    var story = "Hello, " + name;
    return story;
  };


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

var madlib = function (a, b, c, d) {
  var a = "fast";
  var b = "horse";
  var c = "jumped";
  var d = "hedegrows";
    var story = "The " + a + " and agile " + b + " nimbly " + c + " over the " + d + " and fences."
  return story;
}


