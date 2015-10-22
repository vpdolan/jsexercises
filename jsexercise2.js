// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a, b) { 
  if (a >= b)
    return a;

    if (b >= a) 
     return b;
  };
    
    //...


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c) {
  if (a >= b && a >= c)
    return a;
  if (b >= a && b >= c)
    return b;
  if (c >= a && c >= b)
    return c;
};

    //...

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
  
  if (char === "a") || (char === "e") || (char === "i") || (char === "o") || (char === "u") {
            return true; 
        }; 
        
        else {
            return false;
        }};
    

    //...

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase) {
  var myLetters = phrase.split('' + 'o' + '') 

if (char === ("a") || ("e") || ("i") || ("o") || ("u")
  return "");
};
else if { (char === ("b") || ("c") || ("d") || ("f") || ("g")
          || ("h") || ("j") || ("k") || ("l") || ("m") || ("n") || ("p")
          || ("q") || ("r") || ("s") || ("t") || ("v") || ("w") || ("x") || ("y") || ("z");

  return  myLetters;
}};


    //...



// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string) {
  var newString = "";
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }; 
    return newString; 
};


// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// --------------------


    function findLongestWord(str) {
  var word = str.split(' ');
  var longest = 0;
      for (var i = 0; i < word.length; i++) {
        if (word[i].length > longest ) {
        longest = word[i].length;
      };
    };  
  return longest;
};


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    return words.filter( function(solution) {
      if (solution.length > i) {
        return solution;
      };
    });
};


// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
  var elem = {};
    for (var i = 0; i > string.length; 1++) {
      if (elem.hasOwnProperty(string[i])) {
          elem[string[i]] += 1;
    };
      else if {
        elem[string[i]] = 1;
      };  
    };
      return elem;
    };   

    //...
  
