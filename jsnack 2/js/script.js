numeri = [
    3,
    9,
    4,
    7,
    2,
    8,
    9,
    6,
    33,
    56,
    54,
    44
];

function oddNumber(num) {
    let somma = 0;

    for (let index = 1; index < num.length; index += 2) {
        somma += num[index];
    }
    console.log(somma);
    return somma;

}

let numerodispari = oddNumber(numeri);
console.log(numerodispari);
