// // Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");
// function printOdds(count) {
//   for (let i = 0; i < count; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }
// printOdds(10);

// // Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");
// function checkAge(username, age) {
//   let aboveSixteen = `You can drive ${username}!`;
//   let belowSixteen = `Sorry ${username}, but you need to wait until you're 16`;

//   if (age < 16) {
//     return belowSixteen;
//   } else {
//     return aboveSixteen;
//   }
// }
// let something = checkAge("John", 21);
// console.log(something);

// // Exercise 3 Section
// console.log("EXERCISE 3:\n==========\n");
// function whichQuadrant(x, y) {
//   if (x > 0 && y > 0) {
//     console.log(`(${x}, ${y}) is in Quadrant 1`);
//   } else if (x < 0 && y > 0) {
//     console.log(`(${x}, ${y}) is in Quadrant 2`);
//   } else if (x < 0 && y < 0) {
//     console.log(`(${x}, ${y}) is in Quadrant 3`);
//   } else if (x > 0 && y < 0) {
//     console.log(`(${x}, ${y}) is in Quadrant 4`);
//   } else if (x == 0 && y != 0) {
//     console.log(`(${x},${y}) is on the y axis`);
//   } else if (y == 0 && x != 0) {
//     console.log(`(${x},${y}) is on the x axis`);
//   } else {
//     console.log(`(${x},${y}) is on the origin`);
//   }
// }
// whichQuadrant(0, 0);

// // Exercise 4 Section
// console.log("EXERCISE 4:\n==========\n");
// function whichTriangle(side1, side2, side3) {
//   let triangleType = "";
//   if (side1 == side2 && side1 == side3) {
//     triangleType = "equilateral";
//   } else if (side1 == side2 || side1 == side3) {
//     triangleType = "isosceles";
//   } else {
//     triangleType = "scalene";
//   }
//   return console.log(
//     `Sides [${side1}, ${side2}, ${side3}] form a Triangle of Type: ${triangleType}`
//   );
// }
// whichTriangle(2, 2, 3);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function phoneDataInfo(planLimit, day, usage) {
  let daysRemaining = 30 - day;
  let recommendedAVG = planLimit / 30;
  let actualAVG = usage / day;
  let averageDailyUse =
    Math.round((recommendedAVG + Number.EPSILON) * 1000) / 1000;
  let exceedingDailyUse = Math.round((actualAVG + Number.EPSILON) * 100) / 100;
  let exceedingTotalIfIgnored =
    Math.round((exceedingDailyUse * 30 - planLimit + Number.EPSILON) * 100) /
    100;
  let stayBelowDataPlanRate =
    Math.round(((planLimit - usage) / day + Number.EPSILON) * 100) / 100;

  if (actualAVG > recommendedAVG) {
    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${averageDailyUse} GB/day`);
    console.log(
      `You are EXCEEDING your average daily use (${exceedingDailyUse} GB/day),\n continuing this high usage, you'll exceed your data plan by ${exceedingTotalIfIgnored} GB.`
    );
    console.log(
      `To stay below your data plan, use no more than ${stayBelowDataPlanRate} GB/day.`
    );
  } else if (actualAVG < recommendedAVG) {
    console.log(`You are BELOW your daily average use `);
  } else {
    console.log(
      `You are right on track with the recommended daily average for your plan`
    );
  }
}

phoneDataInfo(100, 15, 56);
