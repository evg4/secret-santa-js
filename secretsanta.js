function secretSanta(namesList) {
  let results = {};
  if (!Array.isArray(namesList) || namesList.length === 1) {
    console.log("Please enter an array with 2 or more names");
  } else if (namesList.length === 2) {
    results[namesList[0]] = namesList[1];
    results[namesList[1]] = namesList[0];
  } else {
    let used = Array(namesList.length).fill(false, 0);
    let values = Array(namesList.length).fill(null, 0);

    function getRandomNumber(upperLimit) {
      let index = Math.floor(Math.random() * upperLimit);
      if (used[index] === false) {
        used[index] = true;
        return index;
      } else {
        return getRandomNumber(namesList.length);
      }
    }

    for (let i = 0; i < namesList.length; i++) {
      values[i] = getRandomNumber(namesList.length);
    }
    console.log(`values: ${values}`);
    for (let i = 0; i < values.length; i++) {
      values[i] = namesList[values[i]];
    }
    console.log(namesList);
    console.log(values);
    for (let i = 0; i < namesList.length; i++) {
      if (namesList[i] == values[i]) {
        console.log("Someone was assigned to themself! trying again...");
        return secretSanta(namesList);
      }
    }

    for (let i = 0; i < namesList.length; i++) {
      results[namesList[i]] = values[i];
    }
  }
  return results;
}

function randomArray(array) {
  let limit = array.length;
}

//uncomment the below to test the code
//console.log(secretSanta(["abby", "ben", "colm", "denzel"]));

//to run: type
// node secretsanta.js
