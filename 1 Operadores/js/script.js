// NOTA! Em JavaScript, o ponto e vírgula (;) é opcional, mas é recomendado o seu uso.
// Podemos usar aspas duplas ou simples para declarar uma string.

// 1 - Number

console.log("teste 1");

// Imprime o tipo de dado do número 2, que é "number"
console.log(typeof 2);
// Imprime o tipo de dado do número 5.14, que é "number"
console.log(typeof 5.14);
// Imprime o tipo de dado do número -12, que é "number"
console.log(typeof -127);

// 2 - Operadores aritméticos

console.log("teste 2");

// Imprime o resultado da soma entre 10 e 5, que é 15
console.log(10 + 5);
// Imprime o resultado da subtração entre 10 e 5, que é 5
console.log(10 - 5);
// Imprime o resultado da multiplicação entre 10 e 5, que é 50
console.log(10 * 5);
// Imprime o resultado da divisão entre 10 e 5, que é 2
console.log(10 / 5);
// Imprime o resultado  da expressão 10 + 4 * 2, que é 18
console.log(10 + (4 * 2));

// 3 - Numeros especiais

console.log("teste 3");

// Imprime o tipo de dado do número Infinity, que é "number"
console.log(typeof Infinity);

// Imprime o tipo de dado do número -Infinity, que é "number"
console.log(typeof -Infinity);

// Imprime o tipo de dado do número NaN, que é "number"
console.log(12 * "asd");

// Imprime o tipo de dado do número NaN, que é "number"
console.log(typeof NaN);

// 4 - Strings

console.log("teste 4");

// Imprime o tipo de dado da string "Olá, mundo!", que é "string"
console.log("Olá, mundo!");

// Imprime o  de dado da string 'com crase', que é "string"
console.log('com crase');

// 5 - Símbolos especiais em strings

console.log("teste 5");

//Imprime o tipo de dado com a quebra de linha.
console.log("Testando a \n quebra de linha");

//Imprime o tipo de dado com a tabulação.
console.log("Testando a \t tabulação");

// 6 - Concatenação de strings

console.log("teste 6");

console.log("Olá, " + "mundo!");

// 7 - Template strings... lembrando que é com crase, se for com aspas simples ou duplas não funciona.

console.log("teste 7");

console.log(`A soma de 10 + 5 é ${10 + 5}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("Teste")}`);

// 8 - Boolean

console.log("teste 8");

// Imprime o tipo de dado do booleano true, que é "boolean"
console.log(true);

// Imprime o tipo de dado do booleano false, que é "boolean"
console.log(false);

console.log(5 > 20);

console.log(5 < 20);

console.log(5 == 5);

console.log(typeof false);

// 9 - Comparações

console.log("teste 9");

// Imprime o tipo de dado da comparação 5 <= 5, que é "true"
console.log(5 <= 5);

// Imprime o tipo de dado da comparação 5 >= 4, que é "true"
console.log(5 >= 4);

// Imprime o tipo de dado da comparação 5 < 5, que é "false"
console.log(5 < 5);

// Imprime o tipo de dado da comparação 5 == 5, que é "true"
console.log(5 == 5);

// Imprime o tipo de dado da comparação 5 == 4, que é "false"
console.log(5 == 4);

// Imprime o tipo de dado da comparação 5 != 4, que é "true"
console.log(5 != 4);

// 10 - Identico

console.log("teste 10");

// Imprime o tipo de dado da comparação 9 == "9", que é "true"
console.log(9 == "9");

// Imprime o tipo de dado da comparação 9 === "9", que é "false"
console.log(9 === "9");

// Imprime o tipo de dado da comparação 9 != "9", que é "false"
console.log(9 != "9");

// Imprime o tipo de dado da comparação 9 !== "9", que é "true"
console.log(9 !== "9");

// 11 - Operadores lógicos

console.log("teste 11");

// Imprime o tipo de dado da comparação true && true, que é "true"
console.log(true && true);

// Imprime o tipo de dado da comparação true && false, que é "false"
console.log(true && false);

// Imprime o tipo de dado da comparação true || false, que é "true"
console.log(true || false);

// Imprime o tipo de dado da comparação !true, que é "false"
console.log(!true);

//Imprime o tipo de dado da comparação &&, que é "true"
console.log(5 > 2 && 2 < 10);

//Imprime o tipo de dado da comparação &&, que é "false"
console.log(5 > 2 && "Ibercson" === 1);

//Imprime o tipo de dado da comparação ||, que é "true" porque uma das condições é verdadeira.
console.log(5 > 2 || "Ibercson" === 1);

//Imprime o tipo de dado da comparação ||, que é "false" porque as duas condições são falsas.
console.log(5 < 2 || 5 > 100);

//Imprime o tipo de dado da comparação !, que é "false" porque a condição é verdadeira.
console.log(!true);

//Imprime o tipo de dado da comparação !, que é "true" porque a condição é falsa.
console.log(!5 > 2);

// 12 - empty values

console.log("teste 12");

//Imprime o tipo de dado da comparação null, que é "object" ou seja, um objeto vazio.
console.log(typeof null, typeof undefined);

//Imprime o tipo de dado da comparação undefined, que é "undefined" ou seja, um valor indefinido.
console.log(null === undefined);

//Imprime o tipo de dado da comparação null, que é "true" ou seja, um objeto vazio.
console.log(null == undefined);

//Imprime o tipo de dado da comparação null, que é "false" ou seja, um objeto vazio.
console.log(null == false);

//Imprime o tipo de dado da comparação null, que é "false" ou seja, um objeto vazio.
console.log(undefined == false);

// 13 - Mudança de tipos

console.log("teste 13");

//Imprime o tipo de dado da comparação 5 * null, que é "0" ou seja, um objeto vazio.
console.log(5 * null);

//Imprime o tipo de dado da comparação teste * olá, que é "NaN" ou seja, um objeto vazio.
console.log("teste" * "olá");

//Isso ocorre devido à coerção de tipo no JavaScript. Quando você usa o operador `+` com uma string e um número, o JavaScript converte o número em uma string e então concatena as duas strings. Portanto, `"10" + 1` se torna `"10" + "1"`, que resulta em `"101"`.
console.log("10" + 1);

//Isso ocorre devido à coerção de tipo no JavaScript. Quando você usa o operador `-` com uma string e um número, o JavaScript converte a string em um número e então subtrai o número. Portanto, `"10" - 1` se torna `10 - 1`, que resulta em `9`.
console.log("10" -1);