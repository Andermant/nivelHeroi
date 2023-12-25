let nomeHeroi = "Fazedor de Viúvas"
let xp = 7000
let nivelHeroi = "Desconhecido"
let moedas = 0 

if(xp>0 && xp<=1000){
  moedas += 10
  nivelHeroi = "Ferro"
}else if (xp>1000 && xp<=2000){
  moedas += 20 
  nivelHeroi = "Bronze"
}else if (xp>2000 && xp<=5000){
  moedas += 50
  nivelHeroi = "Prata"
}else if (xp>5000 && xp<=7000){
  moedas += 100
  nivelHeroi = "Ouro"
}else if (xp>7000 && xp<=8000){
  moedas += 150
  nivelHeroi = "Platina"
}else if (xp>8000 && xp<=9000){
  moedas += 200
  nivelHeroi = "Ascendente"
}else if (xp>9000 && xp<=10000){
  moedas += 250
  nivelHeroi = "Imortal"
}else if (xp>10000){
  moedas += 300
  nivelHeroi = "Radiante"
}else {
  nivelHeroi = "Desconhecido"
}

console.log("PARABÉNS!!")
console.log("Seu herói, "+ nomeHeroi + " atingiu o nível " + nivelHeroi + "!")
console.log("Recompensa: +" + moedas + " moedas")