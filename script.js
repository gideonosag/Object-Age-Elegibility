"use strict";

const gideon = {
  firstName: "Gideon",
  lastName: "Efosa",
  job: "Software Developer",
  age: 2026 - 2009,
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

  const message =
    gideon.age >= 20
      ? prompt(
          `${greetings}, What information do you need? Choose between firstName, lastName, job, age, friends, and location`,
        )
      : `${greetings}, sorry you're not yet elegible tyo access this information`;

  return message;
}
console.log(about("Gideon"));
