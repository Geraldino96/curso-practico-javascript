const selena = [
    {
        atributo: "Inteligencia",
        note: 8,
        credit: 5,
    },
    {
        atributo: "Paciencia",
        note: 6,
        credit: 5,
    },
    {
        atributo: "Belleza",
        note: 10,
        credit: 4,
    },
];

const notesWithCredit = selena.map(function (atributos) {
    return atributos.note * atributos.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function(sum = 0, nuevoValor){
        return sum + nuevoValor;
    }
);

const credits = selena.map(function (atributos) {
    return atributos.credit;
});

const sumOfCredits = credits.reduce(
    function(sum = 0, nuevoValor){
        return sum + nuevoValor;
    }
);

const PPF = sumOfNotesWithCredit / sumOfCredits;
