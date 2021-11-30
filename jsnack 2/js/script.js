numeri = [];

function somma(num) {
    let somma = 0;

    for (let index = 1; index < num.length; index += 2) {
        somma += num[index];
    }
    console.log(somma);
    return somma;

}

let i = 0;
    while (i < 20) {
        numeri.push(Math.floor(Math.random() * 100));
        i++;
    }

let numbers = document.getElementById('numbers');
numbers.innerHTML += numeri;

console.log(numeri);
let numerodispari = somma(numeri);
console.log(numerodispari);

let slot = document.querySelector('.slot');
slot.innerHTML += numerodispari;