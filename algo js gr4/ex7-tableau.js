console.log(" Exercice Tableau : ")
let names = []
names.push("Vincent", "Paul", "Arthur")
names.forEach(function(name){
    console.log(name,"va a la peche")
})
console.log(names)
let namesWithFishing = [];
names.forEach(function(name) {
    namesWithFishing.push(name + " va a la peche");
});
console.log(namesWithFishing);
console.log(" ")