

function uppg9 (){
const numbers = [4,7,10,13,22,5];

for (let num of numbers) {
    if (num % 2 === 0) {
        console.log(num + "jämt");
    } else {
        console.log(num + "udda");
    }
  } 
}

module.exports = { uppg9 };
