console.log(" Exercice Pokémon : ")
class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky() {
        return Math.random() < this.luck;
    }

    attackPokemon(defenseur) {
        if (this.isLucky()) {
            let damage = this.attack - defenseur.defense;
            defenseur.hp -= damage;
            console.log(damage + " ont été infligés");
            console.log("Il reste " + defenseur.hp + " à " + defenseur.name);
        } else {
            console.log("L'attaque échoue");
        }
    }
}

let pikachu = new Pokemon("Pikachu", 40, 20, 100, 0.8);
let bulbizarre = new Pokemon("Bulbizarre", 35, 25, 100, 0.7);

while (pikachu.hp > 0 && bulbizarre.hp > 0) {
    pikachu.attackPokemon(bulbizarre);

    if (bulbizarre.hp <= 0) {
        console.log("Bulbizarre est KO");
        break;
    }
    
    bulbizarre.attackPokemon(pikachu);
    
    if (pikachu.hp <= 0) {
        console.log("Pikachu est KO");
        break;
    }
}
console.log(" ")