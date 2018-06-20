/* 
Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times.Note: k is guaranteed to be a positive integer.

For s = "4[ab]", the output should be decodeString(s) = "abababab"
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa" 
*/

const decodeString = (s) => {

  let result = [];
  let split = s.split('');
  let repeatCount;
  let repeatString;
  
  for (let i = 0; i < split.length; i++) {
    if (split[i] !== ']') {
      result.push(split[i]);
    } else {
      let temp = '';
      while (result[result.length - 1] !== '[') {
        temp = result.pop() + temp;
      }
      result.pop();
      if (result.length > 0 && Number(result[result.length - 1])) {
        repeatCount = parseInt(result.pop());
      }
      repeatString = temp.repeat(repeatCount);
      result.push(repeatString);
    }
  }
  return result.join('');
}

// console.log(decodeString("2[b3[a]]"));
// => baaabaaa
// console.log(decodeString("4[ab]"));
// => abababab

