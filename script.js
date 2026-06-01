"use strict";

const gideon = {
  firstName: "Gideon",
  lastName: "Efosa",
  job: "Software Developer",
  age: 2026 - 2002,
  friends: ["Tope", "Bola", "Tife", "Caleb"],
  location: "United Kingdom",
  fair: true,
};

// Dot notation.

// console.log(gideon.firstName);

// console.log(gideon.age);

function note(message){

  const namekey = "Name"; 

  // An operation/expression inside a bracket notation that produces a value.

  console.log(gideon["first" + namekey]);
  console.log(gideon["last" + namekey]);

  const concatNames = gideon["first" + namekey] + " " + gideon["last" + namekey]; 
  

  const sage = "Hello"; 

  const mesag = gideon.age >= 20 ? `${sage} ${concatNames} you're elegible` : `${sage} ${concatNames} sorry, you're not elegible`; 



  return mesag; 


}
 console.log( note("Gideon"))