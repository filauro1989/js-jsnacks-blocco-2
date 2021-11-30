nomi = [
    'piero',
    'luca',
    'giacomo',
    'andrea',
    'mario'
];

cognomi = [
    'merola',
    'pacciani',
    'forlini',
    'sabani',
    'pieroni'
]

function generatore(atr1, atr2) {

    let nome = atr1[Math.floor(Math.random() * atr1.length)];
    let cognome = atr2[Math.floor(Math.random() * atr2.length)];
    let persona = nome + ' ' + cognome;
    return persona;  
}

nomecognome = generatore(nomi, cognomi);
