//,MATH - Ubung 1 - CodeFlow Übung lev1_1: Math.PI
console.log(Math.PI);
const PI = Math.PI;
let roundedPI = PI.toFixed(2);
console.log(roundedPI)
// MATH - Ubung 2 - CodeFlow Übung lev1_2: Math.round()

let ergebnes1 = (Math.ceil(PI))
let ergebnes2 = (Math.ceil(9.45))
let ergebnes3 = (Math.ceil(193.4464))
let ergebnes4 = (Math.ceil(0.8596433607))
let ergebnes5 = (Math.ceil(0.65149992))
let ergebnes6 = (Math.ceil(2.1807301500))
let ergebnes7 = (Math.ceil(- 2.9406290890))
let ergebnes8 = (Math.ceil(- 24.45))
console.log(ergebnes1);
console.log(ergebnes2);
console.log(ergebnes3);
console.log(ergebnes4);
console.log(ergebnes5);
console.log(ergebnes6);
console.log(ergebnes7);
console.log(ergebnes8);

function round(x) {
    let y = Math.round(x);
    return y;
}

console.log(round(3.232));
console.log(round(342.23343));

// MATH - Ubung 3 - CodeFlow Übung lev1_2: Math.round()

let randomNum = Math.random();
let randomNum1_10 = Math.floor(Math.random() * 11);
let randomNum1_100 = Math.floor(Math.random() * 101);

console.log(randomNum);
console.log(randomNum1_10);
console.log(randomNum1_100);


// MATH - Ubung 4 - CodeFlow Übung lev1_4: Math.min Math.max

console.log(Math.max(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488));
console.log(Math.min(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488));

// MATH - Ubung 5 - CodeFlow Übung lev2_1: Math.round()

let RundungsArray = [PI, 9.45, 193.4464, 0.8596433607, 0.65149992, 2.1807301500, - 2.9406290890, - 24.45];

RundungsArray.forEach((ZuRunden) => console.log(Math.ceil(ZuRunden)))

// MATH - Ubung 6 - CodeFlow Übung lev2_2: Math.random() Math.floor() Game

let ComputerDenkt = Math.floor(Math.random() * 10 + 1);
console.log(ComputerDenkt)
let ichdenke = prompt("Gib ein Numer")

if (ComputerDenkt == ichdenke) {
    console.log("win")
} else {
    console.log("du hast feliren die Nommer leutet " + ComputerDenkt)
}
// MATH - Ubung 7 - CodeFlow Übung lev2_3: Math.min Math.max

function minimalWerte() {
    let dasAlterDerEltern = Math.min(45, 49);
    let dasAlterDerGeschwister = Math.min(15, 12, 23);
    let dasAlterDerTrainer = Math.min(28, 32, 27);
    let dasAlterDerFussballspieler = Math.min(38, 23, 45, 23, 23)

    let youngsterOne = Math.min(dasAlterDerEltern, dasAlterDerGeschwister, dasAlterDerTrainer, dasAlterDerTrainer)
    console.log(youngsterOne)
}
minimalWerte();