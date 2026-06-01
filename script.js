"use strict";

const gideon = {
  firstName: "Gideon",
  lastName: "Efosa",
  job: "Software Developer",
  age: 2026 - 2003,
  friends: ["Tope", "Bola", "Tife", "Caleb"],
  location: "United Kingdom",
};

// Dot notation.

// console.log(gideon.firstName);

// console.log(gideon.age);

function about(note) {
  const namekey = "Name";

  // An operation/expression inside a bracket notation that produces a value.

  console.log(gideon["first" + namekey]);
  console.log(gideon["last" + namekey]);

  const concatNames =
    gideon["first" + namekey] + " " + gideon["last" + namekey];

  const greetings = `Hello ${concatNames}`;

  // Granting access due to age to the informations in the objects due to the age elegibilty of the age value in the objcet.

  const message = prompt(
    `${greetings}, What information do you need? Choose between firstName, lastName, job, age, friends, and location`,
  );

  if (gideon[message]) {
    return gideon[message];
  } else {
    return `${greetings}, the information you're asking is outside our reach. Please choose between firstName, lastName, job, age, friends, and location.`;
  }
}
console.log(about("Gideon"));
