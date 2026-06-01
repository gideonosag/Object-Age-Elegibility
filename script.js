"use strict";

const gideon = {
  firstName: "Gideon",
  lastName: "Efosa",
  job: "Software Developer",
  birthYear: 2002,
  friends: ["Tope", "Peculiar", "Tife", "Caleb"],
  location: "United Kingdom",
  hasBritishPassport: true,
  calcAge: function (birthYear) {
    return 2026 - birthYear;
  },
};

console.log( gideon.calcAge(gideon.birthYear));
// console.log(gideon.calcAge);

// Dot notation.

// console.log(gideon.firstName);

// console.log(gideon.age);

function about(note) {
  const namekey = "Name";

  // An operation/expression inside a bracket notation that produces a value.

  const nameFirst = gideon["first" + namekey];
  const nameSecond = gideon["last" + namekey];

  // Challenge

  // Gideon has 3 friends, and his best friend is called Tope.
  // Rewrite the sentence above.

  console.log(
    `${gideon.firstName} has ${gideon.firstName.length} friends, and his best friend is called ${gideon.friends[1]}`,
  );

  // const getGideonFriends = gideon.friends;
  // console.log(
  //   getGideonFriends[0],
  //   getGideonFriends[1],
  //   getGideonFriends[2],
  //   getGideonFriends[3],
  // );

  // console.log(gideon.friends[0]);

  // Challenge ends here.

  const concatNames =
    gideon["first" + namekey] + " " + gideon["last" + namekey];

  const greetings = `Hello ${concatNames}`;

  // Retrieving elements from the object gideon.

  const message = prompt(
    `${greetings}, What information do you need? Choose between firstName, lastName, job, age, friends, and location`,
  );

  if (gideon[message]) {
    return gideon[message];
  } else {
    return `${greetings}, the information you're asking is outside our reach. Please choose between firstName, lastName, job, age, friends, and location.`;
  }
}

console.log(about("aboutGideon"));
