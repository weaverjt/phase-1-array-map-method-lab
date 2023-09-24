
/* 1. [How can we "iterate" through individual words in a string?]

const str = 'i have learned something new today';
              //---------split the above string into an array of strings 
              //---------whenever a blank space is encountered
const arr = str.split(" ");
              //---------loop through each element of the array and capitalize the first letter.
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
              //---------Join all the elements of the array back into a string 
              //---------using a blankspace as a separator 
const str2 = arr.join(" ");

*/

/* 2. [Can we execute an iteration inside an iteration? How?]

*/

/* 3. [How can we capitalize just the first letter in a word?]

const word = "freecodecamp"
const capitalized =
  word.charAt(0).toUpperCase()
  + word.slice(1)

  */



const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
    return tutorials.map(function (word) {
      
      const arr = word.split(" ");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      const word2 = arr.join(" ");
    
      return word2;
      });


 
}
