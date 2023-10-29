console.log(" Exercice fonction : ")
var a6 = "Jean"
var b6 ="Paul"
var result = checkname(a6, b6)
function checkname(prenom1, prenom2){
    if (prenom1 == prenom2){
        return " Les deux prenoms sont identiques"
    } else {
        return "Les deux prenoms ne sont pas identiques"
        }
}
console.log(result)
console.log(" ")