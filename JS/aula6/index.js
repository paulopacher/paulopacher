// Não podemos criar variáveis com palavras reservadas (let, var, const, console)
// Variáveis precisam ter nomes significativos
// Não começar o nome de uma variável com um número (1nomeCompleto)
// Não pode conter espaços ou traços (nome completo)
// Utilizamos camelCase (nomeCompleto)
// Variáveis são Case-sensitive (nomeCliente e nomecliente)
// Não podemos redeclarar variáveis com let (let nomeCliente = 'Paulo'; nomeCliente = 'Pacher')
// Não utilize var, utilizar SEMPRE let

let esposo = 'Paulo'; // String
let esposa = 'Adriane'; // String
let filho = 'Adam'; // String

console.log(esposo, 'nasceu em 1984.');
console.log('Em 2000', esposo, 'conheceu', esposa,'.');
console.log(esposo, 'casou-se com', esposa, 'em 2012.');
console.log(esposa, 'teve 1 filho com', esposo, 'em 2015.');
console.log('O filho de', esposo, 'e', esposa, 'se chama', filho,'.');
