// Não podemos criar Constantes com palavras reservadas (let, var, const, console)
// Constantes precisam ter nomes significativos
// Não começar o nome de uma variável com um número (1nomeCompleto)
// Não pode conter espaços ou traços (nome completo)
// Utilizamos camelCase (nomeCompleto)
// Constantes são Case-sensitive (nomeCliente e nomecliente)
// Não podemos modificar o valor de uma Constante como é feito no let
// Não utilize var, utilizar SEMPRE const

const nome = 'Paulo'
console.log(nome);

const primeiroNumero = 10;
const segundoNumero = 10;
const resultado = primeiroNumero + segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado);
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero);