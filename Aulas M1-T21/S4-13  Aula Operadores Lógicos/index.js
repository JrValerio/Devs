const variavelFalsa = false;
const variavelVerdadeira = true;

// Comparando a variavelFalsa e a variavelVerdadeira usando &&
console.log(variavelFalsa && variavelVerdadeira); // Saída: false

// Comparando a variavelFalsa e a variavelVerdadeira usando ||
console.log(variavelFalsa || variavelVerdadeira); // Saída: true

// Negando a variavelFalsa e a variavelVerdadeira
console.log(!variavelFalsa); // Saída: true
console.log(!variavelVerdadeira); // Saída: false

//Usando a negação da variavelFalsa e da variavelVerdadeira com o operador &&
console.log(!variavelFalsa && variavelVerdadeira); // Saida: true
console.log(!variavelVerdadeira && variavelFalsa); // Saída: false

//Usando a negação da variavelFalsa e da variavelVerdadeira com o operador ||
console.log(!variavelFalsa || variavelVerdadeira); // Saida: true
console.log(!variavelVerdadeira || variavelFalsa); // Saída: false

// Além de expressões com duas operações, podemos ter expressões com mais de dois operadores, ou até mesmo expressões combinando vários operadores diferentes, como por exemplo:

// const variavelFalsa = false;
// const variavelVerdadeira = true;

console.log(variavelVerdadeira && variavelVerdadeira && variavelVerdadeira); // Saída: true
console.log(variavelVerdadeira || variavelFalsa || variavelFalsa); // Saída: true

console.log((variavelVerdadeira && variavelVerdadeira) || variavelFalsa); // Saída: true
console.log((variavelFalsa && variavelFalsa) || variavelVerdadeira); // Saída: true

console.log(variavelVerdadeira || (variavelVerdadeira && variavelFalsa)); // Saída: true
console.log(variavelFalsa || (variavelFalsa && variavelVerdadeira)); // Saída: false

console.log(!variavelVerdadeira || (variavelVerdadeira && variavelFalsa)); // Saída: false
console.log(!variavelFalsa || (variavelFalsa && variavelVerdadeira)); // Saída: true

// Além de apenas valores booleanos, também podemos combinar os demais operadores com os operados lógicos:

const a = 10;
const b = 20;

// Se a variável 'a' for maior ou igual a 10
// E
// A variável 'b' for menor do que 50
// A saída é verdadeiro
console.log(a >= 10 && b < 50); // Saída: true

// Se a variável 'a' for maior ou igual a 10
// OU
// A variável 'b' for menor do que 50
// A saída é verdadeiro
console.log(a >= 10 || b < 50); // Saída: true

// Se a variável 'a' for menor do que 10
// E
// A variável 'b' menor do que 50
// A saída é verdadeiro
// Nesse caso a saída será falsa, pois 'a' é igual a 10
console.log(a < 10 && b < 50); // Saída: false

// Se a variável 'a' for menor do que 10
// OU
// A variável 'b' for menor do que 50
// A saída é verdadeiro
console.log(a < 10 || b < 50); // Saída: true
