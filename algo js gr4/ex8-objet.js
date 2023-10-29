console.log("Exercice Objet : ");

let student = {
    name: "John",
    favoriteFood: "Pizza",
    city: "New York"
};

let result1 = 0;
let valeurs = Object.values(student);

// Calcul de la somme des longueurs des valeurs
let totalCharacterCount = valeurs.reduce(function (acc, value) {
    return acc + value.length;
}, 0);

console.log(totalCharacterCount);

valeurs.forEach(function (valeur) {
    result += valeur.length;
});

console.log(result1);

if (result % 2 === 0) {
    console.log("pair");
} else {
    console.log("impair");
}

console.log(" ");