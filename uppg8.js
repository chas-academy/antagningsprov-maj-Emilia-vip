function uppg8(){
const personer = [
  {name: "Emilia", age: 21},
  {name: "Filip", age: 25},
  {name: "Jeanette", age: 31},
  {name: "Frank", age: 29},'
  {name: "Ellen", age: 36},
  ];

  funktion VisaPersonerOver30(personArray){
    for (let person of personArray){
      if (person.age > 30) {
        console.log(person.name);
      }
   }
}
VisaPersonerOver30(personer);
}
module.exports = { uppg8 };
