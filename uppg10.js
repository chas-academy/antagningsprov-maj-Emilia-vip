function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
const bigEven = [];
const smallOddm = [];
const other = [];

    for (let num of numbers) {
        if (num > 10 && num % 2 ===0) {
            bigEven.push(num);
        } else if (num < 10 && num % 2 !==0 {
            smallOdd.push(num);
        } else{
            other.push(num);
        }
return {
    bigEven,
    smallOdd,
    other
  };
} 
  module.exports = { uppg10 };
  
