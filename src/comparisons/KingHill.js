var remaining;
var eliminate;
var king;
var oppo;

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

export function begin(options) {
  if (options.length < 2) {
    console.log("Not enough options.");
  }
  remaining = options.slice();
  eliminate = [];
  shuffle(remaining);
  king = options.shift();
  oppo = options.shift();
}

export function isFinished() {
  return remaining.length == 0;
}

export function getWinner() {
  if (!isFinished()) {
    console.log("Not finished.");
    return;
  }
  return king;
}

export function getChoices() {
  if (isFinished()) {
    console.log("Finished.");
    return;
  }
  if (oppo == null) {
    oppo = remaining.shift();
  }
  return [king, oppo];
}

export function makeChoice(opt) {
  if (isFinished()) {
    console.log("Finished.");
  }
  if (opt !== king || opt !== oppo) {
    console.log("Invalid choice.");
  }
  king = opt;
  oppo = null;
  eliminate.push(opt === king ? oppo : king);
}
