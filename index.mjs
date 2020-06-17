import { fifaData } from "./fifa.mjs";

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// task A
const homeGames = fifaData.filter(function (game) {
  return game.Stage === "Final" && game.Year === 2014;
});
const homeTeams = homeGames.map(function (game) {
  return game["Home Team Name"];
});
console.log(homeTeams);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  return data.filter((item) => {
    return item.Stage === "Final";
  });
}

console.log(getFinals(fifaData));

// return data[]

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
  const years = callback.map(function (item) {
    return item.Year; // another way to write it  return finalsCb.map(item=> item.year)
  });
  return years;
}
console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(callback) {
  const winners = callback.map(function (item) {
    if (item["Home Team Goals"] > item["Away Team Goals"]) {
      return item["Home Team Name"];
    } else {
      return item["Away Team Name"];
    }
  });
  return winners;
}

console.log(getWinners(getFinals(fifaData)));

// /* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!"

// IN 1995, Germany Won the World cup /// outcome

// Parameters:
//  * callback function getWinners
//  * callback function getYears
//  */

function getWinnersByYear(cb1, cb2, data) {
  let years = cb1(getFinals(data));
  let winners = cb2(getFinals(data));
  for (let i = 0; i < years.length; i++) {
    console.log(`In ${years[i]}, ${winners[i]} won the World Cup!`);
  }
}

getWinnersByYear(getYears, getWinners, fifaData);

// /* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

//const expenses = [1, 2, 3, 4, 5,6]; //, 104 , 105, 106];

// const prev = [{ h:10 }, {A: 1}, { H: 3}]
const fifaGoals = [
  { H: 1, away: 3 },
  { H: 2, A: 5 },
  { H: 6, A: 10 },
  { H: 7, A: 19 },
  { H: 1, A: 4 },
];
//avg = total / number;

function getAverageGoals(data) {
  let total = 0;
  const HOME = "Home Team Goals";
  const AWAY = "Away Team Goals";
  for (let i = 0; i < data.length; i++) {
    total = total + data[i][HOME] + data[i][AWAY];
  }

  const averageGoals =
    data.reduce(function (accumulator, item) {
      return accumulator + item[HOME] + item[AWAY];
    }, 0) / data.length;

  console.log(averageGoals);
  //const homeAvg = totalHome / data.length;
  //const awayAvg = totalAway / data.length;
  // `Average home glas: ${homeAvg}. Average away goals: ${awayAvg}`;
}
getAverageGoals(fifaData);

// getAverageGoals();

// /// STRETCH 🥅 //

// /* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had.

// Hint: Investigate your data to find "team initials"!
// Hint: use `.reduce` */

function getCountryWins(data, teamInitial) {
  //  let homwins = 0;
  //  let awaywins = 0;
  //  for (let i  ; i =++)
  //  if(teamInitial === data[i]["Home Team Initials"] ) {
  //    if(home goals > away goals) { win, homewins ++ }
  //  }
  //  if( team === data[i]["AWAy team INitals"]) {
  //    if( awaygoas > hom goasl) { widn, awaywins ++ }
  //  }
  //  const totalWins = homwins + awaywins
  /* code here */
}

// getCountryWins();

// /* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

// function getGoals(/* code here */) {
//   /* code here */
// }

// getGoals();

// /* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

// function badDefense(/* code here */) {
//   /* code here */
// }

// badDefense();

// /* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total = numbers[i] + total;
}

let avg = total / numbers.length;

console.log(avg);

const totalNumber = numbers.reduce(function (add, currentValue) {
  return add + currentValue;
}, 0);
let avg1 = totalNumber / numbers.length;

console.log(avg1);
