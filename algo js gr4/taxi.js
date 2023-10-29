console.log(" Exercice taxi : ")
// Classe qui représente un personnage
class Personnage {
    constructor(nom) {
        this.nom = nom;
        this.santeMentale = 10;
    }
}

// Classe qui représente le trajet
class Trajet {
    constructor() {
        this.musiques = ["Billie Jean - Michael Jackson", "Pokerface - Lady Gaga", "Blinding Lights - The Weeknd", "Sugar - Maroon 5", "Anissa - Wejdene"];
        this.feuxRougesRestants = 30; // Nombres de feux rouges restants au départ
        this.nbChangementsTaxi = 0; // Nombre de changements de taxi au départ
    }
    feuRouge(personnage) {
        if (this.feuxRougesRestants > 0) {
            this.feuxRougesRestants--;
            const musiqueIndex = Math.floor(Math.random() * this.musiques.length);
            this.radio = this.musiques[musiqueIndex];
            console.log(`Musique : ${this.radio}, Feux restants : ${this.feuxRougesRestants}`);
            if (this.radio === "Anissa - Wejdene") {
                this.nbChangementsTaxi++; // changements de taxi
                personnage.santeMentale--; // Réduis la santé mentale du personnage
                console.log(`${personnage.nom} a maintenant ${personnage.santeMentale} points de santé mentale.`);
            }
        }
    }
}

// Fonction principale pour simuler le trajet
function simulerTrajet(personnage, trajet) {
    while (trajet.feuxRougesRestants > 0 && personnage.santeMentale > 0) {
        trajet.feuRouge(personnage); // Utilisation du nom correct de la méthode et passage du personnage
    }
    if (trajet.feuxRougesRestants === 0) { // vérifie si tous les feux rouges ont été passés
        console.log(`${personnage.nom} est bien arrivé après ${trajet.nbChangementsTaxi} changements de taxi.`);
        console.log(`${personnage.nom} lui restait ${personnage.santeMentale} points de santé mentale`)
    } else {
        console.log("Explosion");
    }
}

const perso = new Personnage("Jade");
const trajetperso = new Trajet();

// Appel de la fonction pour simuler le trajet
simulerTrajet(perso, trajetperso);
console.log(" ")