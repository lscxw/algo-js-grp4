console.log(" Exercice Jason : ")

class PersonnageEx2 {
    constructor(nom, probabiliteMourir, probabiliteDegats, probabiliteMourirDegats) {
        this.nom = nom;
        this.pointsDeVie = 100;
        this.probabiliteMourir = probabiliteMourir;
        this.probabiliteDegats = probabiliteDegats;
        this.probabiliteMourirDegats = probabiliteMourirDegats;
    }
}

// Tableau de prénoms pour les survivants
let prenomsSurvivants = ["Alice", "Bob", "Charlie", "Julie", "Ambre"];

// Tableau de caractéristiques disponibles
let caracteristiques = ["blond", "skinny", "barbu", "nerd", "sportif"];

const survivants = [];


// Création de 5 survivants avec des noms et des caractéristiques aléatoires
for (let i = 0; i < 5; i++) {
    let nomSurvivantIndex = Math.floor(Math.random() * prenomsSurvivants.length)
    let caracteristiqueIndex = Math.floor(Math.random() * prenomsSurvivants.length)
    let nomSurvivant = prenomsSurvivants[nomSurvivantIndex]
    let caracteristiqueSurvivant = caracteristiques[caracteristiqueIndex]
    survivants.push(new PersonnageEx2(`${nomSurvivant} (${caracteristiqueSurvivant})`, Math.random(), Math.random(), Math.random()))
    prenomsSurvivants.splice(nomSurvivantIndex, 1)
    caracteristiques.splice(caracteristiqueIndex, 1)
}

// Création du personnage Jason
const jason = new PersonnageEx2("Jason", Math.random(), Math.random(), Math.random())

// Tableau pour stocker les noms des survivants décédés
const morts = [];

// programme le jeu
while (jason.pointsDeVie > 0 && survivants.length > 0) {
    const surviattaqué = survivants[Math.floor(Math.random() * survivants.length)]
    const probaaction = Math.random();
    // Jason tue un survivant
    if (probaaction < surviattaqué.probabiliteMourir) {
        morts.push(surviattaqué.nom);
        survivants.splice(survivants.indexOf(surviattaqué), 1);
        console.log(`${jason.nom} a tué ${surviattaqué.nom}`);
    // Le survivant inflige 1à points de dégâts et esquive
    } else if (probaaction > surviattaqué.probabiliteDegats) {
        jason.pointsDeVie -= 10;
        console.log(`${surviattaqué.nom} a esquivé et a infligé 10 points de dégâts à ${jason.nom} il lui reste ${jason.pointsDeVie}`)
    } else if (probaaction > surviattaqué.probabiliteMourirDegats) {
    // Le survivant inflige 15 points de dégâts mais meurs
        jason.pointsDeVie -= 15;
        morts.push(surviattaqué.nom);
        survivants.splice(survivants.indexOf(surviattaqué), 1);
        console.log(`${surviattaqué.nom} a infligé 15 points de dégâts à ${jason.nom}, mais est mort ${jason.nom} à ${jason.pointsDeVie}.`)
    }
}

if (jason.pointsDeVie <= 0) {
    console.log(`${jason.nom} est finalement tombé, les survivants ont gagné `)
} else {
    // Partie où les survivants n'ont pas réussi à vaincre Jason
    console.log("Les survivants n'ont pas réussi à vaincre Jason et à s'échapper de la forêt. Nous rendons hommage à ceux qui ont perdu la vie : " + morts.join(", "))
}
// Ajout d'une ligne vide pour améliorer la lisibilité
console.log(" ")