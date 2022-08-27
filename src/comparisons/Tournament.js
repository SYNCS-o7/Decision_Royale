var pairs;
var chosen;
var eliminate;

function shuffle(array) {
  var currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function begin(options) {
  if (options.length < 2) {
    console.log("Not enough options.");
  }
  options = options.slice();
  // shuffle(options);
  pairs = options.slice(0, ~~(options.length / 2) * 2);
  chosen = options.length % 2 ? [options[options.length - 1]] : [];
  eliminate = [];
}

function isFinished() {
  return pairs.length == 0 && chosen.length == 1;
}

function getWinner() {
  if (!isFinished()) {
    console.log("Not finished.");
    return;
  }
  return chosen;
}

function getChoices() {
  if (isFinished()) {
    console.log("Finished.");
    return;
  }
  if (pairs.length == 0) {
    let options = chosen.slice();
    pairs = options.slice(0, ~~(options.length / 2) * 2);
    chosen = options.length % 2 ? [options[options.length - 1]] : [];
  }

  return pairs.slice(0, 2);
}

function makeChoice(opt) {
  if (isFinished()) {
    console.log("Finished.");
  }
  if (!pairs.slice(0, 2).includes(opt)) {
    console.log("Invalid choice.");
  }
  chosen.push(opt);
  eliminate.push(opt === pairs[0] ? pairs[1] : pairs[0]);
  pairs.splice(0, 2);
}

export { begin, isFinished, getWinner, getChoices, makeChoice }

// begin(["A", "B", "C", "D", "E"]);
// console.log(getChoices());
// makeChoice("A");
// console.log(getChoices());
// makeChoice("D");
// console.log(getChoices());
// makeChoice("E");
// console.log(getChoices());
// makeChoice("D");
