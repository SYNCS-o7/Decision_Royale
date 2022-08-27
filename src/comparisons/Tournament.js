var remaining;
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

function begin_tour(options) {
  if (options.length < 2) {
    console.log("Not enough options.");
  }
  options = options.slice();
  // shuffle(options);
  remaining = options.slice(0, ~~(options.length / 2) * 2);
  chosen = options.length % 2 ? [options[options.length - 1]] : [];
  eliminate = [];
}

function isFinished_tour() {
  return remaining.length == 0 && chosen.length == 1;
}

function getWinner_tour() {
  if (!isFinished_tour()) {
    console.log("Not finished.");
    return;
  }
  return chosen;
}

function getChoices_tour() {
  if (isFinished_tour()) {
    console.log("Finished.");
    return;
  }
  if (remaining.length == 0) {
    let options = chosen.slice();
    remaining = options.slice(0, ~~(options.length / 2) * 2);
    chosen = options.length % 2 ? [options[options.length - 1]] : [];
  }

  return remaining.slice(0, 2);
}

function makeChoice_tour(opt) {
  if (isFinished_tour()) {
    console.log("Finished.");
    return
  }
  if (!remaining.slice(0, 2).includes(opt)) {
    console.log("Invalid choice.");
    return;
  }
  chosen.push(opt);
  eliminate.push(opt === remaining[0] ? remaining[1] : remaining[0]);
  remaining.splice(0, 2);
}

export { begin_tour, isFinished_tour, getWinner_tour, getChoices_tour, makeChoice_tour }

// begin(["A", "B", "C", "D", "E"]);
// console.log(getChoices());
// makeChoice("A");
// console.log(getChoices());
// makeChoice("D");
// console.log(getChoices());
// makeChoice("E");
// console.log(getChoices());
// makeChoice("D");
