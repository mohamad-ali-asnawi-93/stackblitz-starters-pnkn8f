// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function triple (number){
  const result = number * 3;
  return result
}

const tripled = triple(3)
console.log(tripled)