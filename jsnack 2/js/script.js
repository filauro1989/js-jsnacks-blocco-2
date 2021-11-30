numeri = [
    3,
    6,
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
    for (let index = 0; index < num.length; index++) {
    let numero;  
        if (index % 2 != 0) {
            numero = num[index];
        }
    return numero;
    }
}

let numerodispari = oddNumber(numeri);
console.log(numerodispari);
