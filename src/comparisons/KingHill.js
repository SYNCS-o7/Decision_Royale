var remaining;
var eliminate;
var king;
var oppo;

function shuffle(array) {
  var currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function begin_king(options) {
  if (options.length < 2) {
    console.log("Not enough options.");
  }
  remaining = options.slice();
  eliminate = [];
  shuffle(remaining);
  king = remaining.shift();
  oppo = remaining.shift();
}

export function isFinished_king() {
  return oppo == null && remaining.length === 0;
}

export function getWinner_king() {
  if (!isFinished_king()) {
    console.log("Not finished.");
    return;
  }
  return king;
}

export function getChoices_king() {
  if (isFinished_king()) {
    console.log("Finished.");
    return;
  }
  if (oppo === null) {
    oppo = remaining.shift();
  }
  return [king, oppo];
}

export function makeChoice_king(opt) {
  if (isFinished_king()) {
    console.log("Finished.");
  }
  if (opt !== king || opt !== oppo) {
    console.log("Invalid choice.");
  }
  king = opt;
  oppo = null;
  eliminate.push(opt === king ? oppo : king);
}
