var user
function ppt(user){
    //User & pc can be ['tijera', 'papel', 'piedra']
    var pc=randVal()
console.log(`Seleccionaste ${user}, pc escogió ${pc}`)
    if (user==pc){
        console.log("Empate")
    }
    else if((user=='tijera' && pc=='papel')||(user=='papel' && pc=='piedra')||(user=='piedra' && pc=='tijeras')){
        console.log("Ganaste!")
    }
    else{
        console.log("Perdiste :P ")
    }
}
function randVal(){
    var arguments =['tijera', 'papel', 'piedra']
    var x = Math.floor(Math.random() * arguments.length);
    return arguments[x];
}