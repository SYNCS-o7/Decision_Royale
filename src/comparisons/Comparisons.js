import { begin_tour, isFinished_tour, getWinner_tour, getChoices_tour, makeChoice_tour} from "./Tournament.js";
import { begin_king, isFinished_king, getWinner_king, getChoices_king, makeChoice_king} from "./KingHill.js";

var strategy = "Tournament";

function setStrategy(strat) {
    strategy = strat;
}

function begin(options) {
    if (strategy === "Tournament")
        return begin_tour(options);
    if (strategy === "KingHill")
        return begin_king(options);
}

function isFinished() {
    if (strategy === "Tournament")
        return isFinished_tour();
    else if (strategy === "KingHill")
       return isFinished_king(); 
}

function getWinner() {
    if (strategy === "Tournament")
        return getWinner_tour();
    else if (strategy === "KingHill")
       return getWinner_king(); 
}

function getChoices() {
    if (strategy === "Tournament")
        return getChoices_tour();
    else if (strategy === "KingHill")
       return getChoices_king(); 
}

function makeChoice(opt) {
    if (strategy === "Tournament")
        return makeChoice_tour(opt);
    else if (strategy === "KingHill")
       return makeChoice_king(opt); 
}

export { setStrategy, begin, isFinished, getWinner, getChoices, makeChoice};


