// 1 - Variáveis

console.log("1 - Variáveis");

// var nome = "Ibercson";
// let é uma variável de escopo local, só funciona dentro do bloco e serve para substituir o var.
let nome = "Ibercson";

// Imprime o valor da variável.
console.log(nome);

// Variável do tipo constante, não precisa usar o let.
nome = "Ibercson Alves";

// Imprime o valor da variável.
console.log(nome);

// Variável do tipo constante, não precisa usar o let.
// Const é uma variável que não pode ser alterada.
const idade = 37;

// Imprime o valor da variável.
console.log(idade);

// Caso tente alterar o valor da variável constante, vai dar erro, Exemplo: idade = 38;

// 2 - Mais sobre variáveis

console.log("2 - Mais sobre variáveis");

// Exemplos de como não declarar variáveis.
// let 1nome = "Ibercson"; // Não pode começar com número.
// let nome completo = "Ibercson"; // Não pode ter espaço.
// let nome-completo = "Ibercson"; // Não pode ter traço ou alguns caracteres especiais.

// Exemplos de como declarar variáveis.
let nomeCopleto = "Ibercson"; // Camel case.
let nome_completo = "Ibercson"; // Snake case.
let NomeCompleto = "Ibercson"; // Pascal case.

let a = 10,
    b = 20,
    c = 30;

console.log(a, b, c);

const nomecompleto = "Ibercson Alves";

const nomeCompleto = "Ibercson Alves";

console.log(nomecompleto);

console.log(nomeCompleto);

// Exemplos de simbolos que podem ser usados em variáveis.

let _teste = "Ok"; // Underscore.

let $teste = "Ok"; // Cifrão.

let Teste = "Ok"; // Letra maiúscula.

console.log(_teste, $teste, Teste);

// Adendo: Não pode usar palavras reservadas do JavaScript como nome de variáveis... Abaixo segue uma lista de palavras reservadas do JavaScript.

// break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, finally, for, function, if, import, in, instanceof, new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield.

// Para ver a lista completa de palavras reservadas do JavaScript, acesse o link abaixo.

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#Palavras-chave

// Porem, pode usar palavras reservadas do JavaScript como nome de variáveis, desde que use o símbolo de crase, Exemplo: let `if` = "Ok" ou usando palavra composta, Exemplo: let breakTeste = 1;

// Estrutura de uma função.

// Uma função é um bloco de código que pode ser chamado para executar uma tarefa... Uma função pode ter parâmetros e retornar um valor... Uma função pode ser chamada quantas vezes for necessário... Uma função pode ser chamada de dentro de outra função... podemos chamá-la pelo seu nome, e também podemos chamá-la pelo seu nome seguido de parênteses, Exemplo: nomeDaFuncao()... também podemos inserir parametros, que deixam a execução da função única, ex: soma(a, b) podemos utilizar 

// 3 - Prompt

console.log("3 - Prompt");

// Prompt é uma função que permite que o usuário insira um valor, Exemplo: prompt("Digite seu nome");

// Variável que recebe o valor digitado pelo usuário.
//const age = prompt("Digite sua idade:");

// Imprime o valor da variável.
//console.log(`Você tem ${age} anos.`); 
// Lembrando que o sinal de crase é usado para interpolar variáveis dentro de uma string.

// 4 - Alert

console.log("4 - Alert");

// Alert é uma função que permite que o usuário visualize uma mensagem, Exemplo: alert("Mensagem");

//alert("Teste de alerta");

// Exemplo de alerta com variável.

/*const h= 10;

alert(`O valor da variável h é ${h}`);*/

//Lembrando que excesso de alertas pode ser irritante para o usuário.~

// 5 - Math

console.log("5 - Math");

// Math é um objeto que possui propriedades e métodos para constantes e funções matemáticas.

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Retorna o maior número.

console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Retorna o menor número.

console.log(Math.round(5.6)); // Arredonda para o número inteiro mais próximo.

console.log(Math.floor(5.6)); // Arredonda para baixo.

console.log(Math.ceil(5.6)); // Arredonda para cima.

// 6 - Console

console.log("6 - Console");

// Console é um objeto que possui propriedades e métodos para exibir mensagens no console do navegador.

console.log("Teste!"); // Exibe uma mensagem no console do navegador.

console.error("Erro!"); // Exibe uma mensagem de erro no console do navegador.

console.warn("Aviso!"); // Exibe uma mensagem de aviso no console do navegador.

console.info("Informação!"); // Exibe uma mensagem de informação no console do navegador.

// 7 - Estrutura de controle

console.log("7 - Estrutura de controle");

// Estrutura de controle é uma estrutura que permite que o programa tome decisões e faça ações diferentes de acordo com o resultado de uma condição.

// 7.1 - If

// If é utilizado para executar um bloco de código caso uma condição seja verdadeira, a condição é validada por um booleano, Exemplo: if (true) { console.log("Ok"); }.

const m = 10;

if (m > 5) {
    console.log("Ok, m é maior que 5.");
}

const user = "Ibercson";

if (user === "Ibercson") {
    console.log("Olá Ibercson!");
}

if (user === "Beto") {
    console.log("Olá Beto!");
} // Não vai imprimir nada, pois a condição é falsa.

console.log(user === "Ibercson", user === "Beto"); // Imprime false e true.

// 7.2 - Else

// Else é utilizado para executar um bloco de código caso uma condição seja falsa, no else não é necessário colocar uma condição, pois ele é executado caso a condição do if seja falsa, Exemplo: if (false) { console.log("Ok"); } else { console.log("Não ok"); }.

const loggedIn = false;

if (loggedIn) {
    console.log("Usuário logado.");
} else {
    console.log("Usuário não logado.");
} // Imprime Usuário não logado, pois a condição é falsa.

const q = 10;
const w = 15;

if (q > 5 && w > 20) { // && significa "e".
    console.log("Números mais altos");
} else {
    console.log("Números mais baixos");
} // Imprime Números mais baixos, pois a condição é falsa.

// 7.3 - Else if

// Else if é utilizado para executar um bloco de código caso uma condição seja falsa, no else if é necessário colocar uma condição, pois ele é executado caso a condição do if seja falsa, Exemplo: if (false) { console.log("Ok"); } else if (true) { console.log("Não ok"); }.

if (1 > 2) { // 1 não é maior que 2.
    console.log("Teste 1"); // Não vai imprimir nada, pois a condição é falsa.
} else if (2 > 3) { // 2 não é maior que 3.
    console.log("Teste 2"); // Não vai imprimir nada, pois a condição é falsa.
} else if (5 > 1) { // 5 é maior que 1.
    console.log("Agora deu certo!"); // Vai imprimir Agora deu certo!, pois a condição é verdadeira.
}

const userName = "Ibercson";
const userAge = 37;

if (userName === "Beto") {
    console.log("Olá Beto!");
} else if (userAge === 32) {
    console.log("Você tem 32 anos.");
} else if (userName === "Ibercson" && userAge === 37) {
    console.log("Olá Ibercson, você tem 37 anos.");
} else {
    console.log("Usuário não identificado.");
} // Imprime Olá Ibercson, você tem 37 anos, pois a condição é verdadeira.

// 8 - Estrutura de repetição

console.log("8 - Estrutura de repetição");

// Estrutura de repetição é uma estrutura que permite que o programa repita um bloco de código enquanto uma condição for verdadeira, evitando assim a repetição desnecessária de código.

// Alguns exemplos de estrutura de repetição são: for, while, do while.

// P.S.: Fica a critério do programador escolher qual estrutura de repetição usar, pois todas fazem a mesma coisa, porém de formas diferentes... Ficar atento para não criar um loop infinito, pois isso pode travar o navegador.

// 8.1 - While

// While é utilizado para executar um bloco de código enquanto uma condição for verdadeira, É necessário colocar uma condição, pois ele é executado enquanto a condição for verdadeira, Exemplo: while (true) { console.log("Ok"); }.

console.log("8.1 - While");

let p = 0; // Variável que vai ser usada como contador.

while (p < 5) { // Enquanto p for menor que 5, vai executar o bloco de código abaixo.
    console.log(`Repetição número ${p}`);
    p++; // Incrementa 1 na variável p. P.S.: p++ é a mesma coisa que p = p + 1.
}

// loop infinito

/*let x = 10;

while (x > 5) { // Enquanto x for maior que 5, vai executar o bloco de código abaixo.
    console.log(`Repetição número ${x}`);
}*/

// 8.2 - Do while

// Do while é utilizado para executar um bloco de código enquanto uma condição for verdadeira, É necessário colocar uma condição, pois ele é executado enquanto a condição for verdadeira, Exemplo: do { console.log("Ok"); } while (true);.

console.log("8.2 - Do while");

let o = 10; // Variável que vai ser usada como contador.

do { // Executa o bloco de código abaixo.
    console.log(`Valor de o: ${o}`); // Imprime o valor da variável o.
    o--; // Decrementa 1 na variável o. P.S.: o-- é a mesma coisa que o = o - 1.
} while (o > 1); // Enquanto o for maior que 1, vai executar o bloco de código acima.

// 8.3 - For

// For é utilizado para executar um bloco de código enquanto uma condição for verdadeira, É necessário colocar uma condição, pois ele é executado enquanto a condição for verdadeira, Exemplo: for (let i = 0; i < 5; i++) { console.log("Ok"); }.

console.log("8.3 - For");

for (let t = 0; t < 10; t++) { // Enquanto t for menor que 10, vai executar o bloco de código abaixo.
    console.log("Repetindo algo..."); // Imprime Repetindo algo...
}

// Adendo: O for é composto por 3 partes, a primeira parte é a declaração da variável, a segunda parte é a condição e a terceira parte é o incremento ou decremento da variável.

// A variável tambem pode ser declarada fora do for, Exemplo: let t = 0; for (t < 10; t++) { console.log("Repetindo algo..."); }.

let r = 10; // Variável que vai ser usada como contador.

for (r; r > 0; r--) { // Enquanto r for maior que 0, vai executar o bloco de código abaixo.
    console.log(`Valor de r: ${r}`); // Imprime o valor da variável r.
} 

// 9 - Break

console.log("9 - Break");

// Break é utilizado para interromper um loop, Exemplo: for (let i = 0; i < 10; i++) { if (i === 5) { break; } console.log(i); }.

for (let g = 20; g > 10; g--) { // Enquanto g for maior que 10, vai executar o bloco de código abaixo.
    console.log(`Valor de g: ${g}`); // Imprime o valor da variável g.
    if (g === 12) { // Se g for igual a 12, vai executar o bloco de código abaixo.
        console.log("O g é igual a 12!"); // Imprime O g é igual a 12!
        break; // Interrompe o loop.
    }
} 

// 10 - Continue

console.log("10 - Continue");

// Continue é utilizado para pular uma iteração do loop, e dar inicio a uma nova execução. Exemplo: for (let i = 0; i < 10; i++) { if (i === 5) { continue; } console.log(i); }.

for (let s = 0; s < 10; s++) { // Enquanto s for menor que 10, vai executar o bloco de código abaixo.
    // Operador resto = %.
    if (s % 2 === 0) { // Se s for par, vai executar o bloco de código abaixo.
        console.log("Número par!"); // Imprime Número par!
        continue; // Pula a iteração e inicia uma nova execução.
    }

    console.log(s); // Imprime o valor da variável s.
}

// 11 - Switch

console.log("11 - Switch");

// Switch é utilizado para executar um bloco de código de acordo com o valor de uma variável, Cada bloco de código é chamado de case, para cada case temos de colocar um break; E temos o default, que é executado caso nenhum case seja verdadeiro, Exemplo: switch (variavel) { case 1: console.log("Ok"); break; case 2: console.log("Não ok"); break; default: console.log("Padrão"); }.

const time = "Flamengo"; // Variável que vai ser usada como parâmetro.

switch (time) { // Switch recebe a variável time.
    case "Flamengo": // Caso a variável time seja igual a Flamengo, vai executar o bloco de código abaixo.
        console.log("Mengão!"); // Se sim, Imprime Mengão!
        break; // Interrompe o switch.
    case "Vasco": // Caso a variável time seja igual a Vasco, vai executar o bloco de código abaixo.
        console.log("Vascão!"); // Se sim, Imprime Vascão!
        break; // Interrompe o switch.
    case "Botafogo": // Caso a variável time seja igual a Botafogo, vai executar o bloco de código abaixo.
        console.log("Fogão!"); // Se sim, Imprime Fogão!
        break; // Interrompe o switch.
    case "Fluminense": // Caso a variável time seja igual a Fluminense, vai executar o bloco de código abaixo.
        console.log("Fluzão!"); // Se sim, Imprime Fluzão!
        break; // Interrompe o switch.
    default: // Caso a variável time não seja igual a nenhum dos valores acima, vai executar o bloco de código abaixo.
        console.log("Time não identificado!"); // Se sim, Imprime Time não identificado!
}

// switch "errado"

// Cuidado para não esquecer de colocar o break; em cada case, pois se não colocar, vai executar todos os cases abaixo do case verdadeiro, podendo gerar um resultado errado.

const time2 = "Flamengo"; // Variável que vai ser usada como parâmetro.

switch (time2) { // Switch recebe a variável time2.
    case "Flamengo": // Caso a variável time2 seja igual a Flamengo, vai executar o bloco de código abaixo.
        console.log("Mengão!"); // Se sim, Imprime Mengão!
    case "Vasco": // Caso a variável time2 seja igual a Vasco, vai executar o bloco de código abaixo.
        console.log("Vascão!"); // Se sim, Imprime Vascão!
    case "Botafogo": // Caso a variável time2 seja igual a Botafogo, vai executar o bloco de código abaixo.
        console.log("Fogão!"); // Se sim, Imprime Fogão!
    case "Fluminense": // Caso a variável time2 seja igual a Fluminense, vai executar o bloco de código abaixo.
        console.log("Fluzão!"); // Se sim, Imprime Fluzão!
    default: // Caso a variável time2 não seja igual a nenhum dos valores acima, vai executar o bloco de código abaixo.
        console.log("Time não identificado!"); // Se sim, Imprime Time não identificado!
} // Imprime Mengão!, Vascão!, Fogão!, Fluzão!, Time não identificado!.. Pois o case verdadeiro é o primeiro, mas não tem o break;, então ele executa todos os cases abaixo.





























