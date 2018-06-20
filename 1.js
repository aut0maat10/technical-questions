/* 
Question 1 -- sortByStrings(s, t): Sort the letters in the string s by the order they occur in the string t.You can assume t will not have repetitive characters.For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw".For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg". 
*/

const sortByStrings = (s, t) => {

  let result = []; 
  const strArr = s.split('');
  const key = t.split('');

  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < strArr.length; j++) {
      if (key[i] === strArr[j]) {
        result.push(key[i])
      }
    }
  }
  return result.join('');
}

// console.log(sortByStrings('good', 'odg')) 
// => "oodg"