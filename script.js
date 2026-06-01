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

  const nameFirst = gideon["first" + namekey];
  const nameSecond = gideon["last" + namekey];

  // Challenge

  // Gideon has 3 friends, and his best friend is called Tope.
  // Get the name, 3 friends and the best friend.

  console.log(nameFirst);

  const getGideonFriends = gideon.friends;
  console.log(
    getGideonFriends[0],
    getGideonFriends[1],
    getGideonFriends[2],
    getGideonFriends[3],
  );

  console.log(gideon.friends[0]); // Challenge ends here.

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
