numeri = [];

function oddNumber(num) {
    let somma = 0;

    for (let index = 1; index < num.length; index += 2) {
        somma += num[index];
    }
    console.log(somma);
    return somma;

}

let randomNumber;
let i = 0;
    while (i < 20) {
        numeri.push(Math.floor(Math.random() * 100));
        i++;
    }


console.log(numeri);
let numerodispari = oddNumber(numeri);
console.log(numerodispari);
