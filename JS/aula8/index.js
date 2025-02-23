/*
Paulo Pacher tem 32 anos, pesa 104 kg
tem 1.76 de altura e seu IMC é de xx.xxxxxxxxxx
Paulo Pacher nasceu em 1992
*/

const nome = 'Paulo Pacher';
const idade = 32;
const peso = 104;
const alturaEmM = 1.76;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM); // peso / (altura * altura)
let anoNascimento = 2025 - idade - 1

console.log(nome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal + '.', nome, 'nasceu em', anoNascimento + '.')
console.log(`${nome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}. ${nome} nasceu em ${anoNascimento}.`)