// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
  for (let i = 0; i < count; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
printOdds(10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(age) {
  let aboveSixteen = "You can drive!";
  let belowSixteen = "Sorry, but you need to wait until you're 16";

  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}
checkAge(21);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y) {
  if (x > 0 && y > 0) {
    console.log("Quadrant 1");
  } else if (x < 0 && y > 0) {
    console.log("Quadrant 2");
  } else if (x < 0 && y < 0) {
    console.log("Quadrant 3");
  } else if (x > 0 && y < 0) {
    console.log("Quadrant 4");
  } else {
    console.log("Not in any quandrant");
  }
}
whichQuadrant(2, 2);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function whichTriangle(side1, side2, side3) {
  let triangleType = "";
  if (side1 == side2 && side1 == side3) {
    triangleType = "equilateral";
  } else if (side1 == side2 || side1 == side3) {
    triangleType = "isosceles";
  } else {
    triangleType = "scalene";
  }
  return console.log(
    `Sides [${side1}, ${side2}, ${side3}] form a Triangle of Type: ${triangleType}`
  );
}
whichTriangle(2, 2, 3);
