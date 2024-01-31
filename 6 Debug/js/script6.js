// 1 - strict

console.log("1 - strict");

// O strict mode foi introduzido no ECMAScript 5. Ele permite que você coloque um programa ou uma função em um contexto restrito. O código em tal contexto é executado em um modo estrito, que impõe restrições adicionais ao mesmo. O objetivo é indicar erros comuns de codificação ou enganos, tornando-os mais difíceis de silenciar.

"use strict"; // O modo estrito é ativado.

//opa = "oi"; // Erro: variável global implícita, não permitida em modo estrito, caso contrário, seria criada.

//const opa = "oi"; // Erro: variável global implícita, não permitida em modo estrito, caso contrário, seria criada.

//  const undefined = 5; // Erro: não é possível definir uma variável com o nome undefined.

//delete []. length; // Erro: não é possível excluir uma propriedade não configurável de um objeto.

// 2 - debug

console.log("2 - debug");

// O método log de console é usado para registrar qualquer tipo de mensagem no console do navegador. Ele é usado para fins de depuração. O método log de console é usado para registrar qualquer tipo de mensagem no console do navegador. Ele é usado para fins de depuração.

let a = 1;

let b = 2;

if(a == 1) { // Se a for igual a 1
    a = b + 2; // a recebe b + 2
}

console.log(a); // 4

for (let i = 0; i < b; i++) { // Enquanto i for menor que b
    a = a + 2; // a recebe a + 2
    console.log(a); // 6, 8
}

if (a > 5) { // Se a for maior que 5
    a = 25; // a recebe 25
}

console.log(a); // 25

// 3 - debugger

console.log("3 - debugger");

// O comando debugger é usado para pausar a execução do JavaScript e iniciar o depurador, se disponível. Isso tem o mesmo efeito que definir um ponto de interrupção em uma linha de código no depurador. podemos evidenciar os valores das variáveis em tempo real e com o programa executando. para ver o debugger funcionando, abra o console do navegador e clique em "sources".

/*let c = 1;

let d = 2;

if(c == 1) { // Se c for igual a 1
    c = d + 2; // c recebe d + 2
};

debugger;

for (let i = 0; i < d; i++) { // Enquanto i for menor que d
    c = c + 2; // c recebe c + 2
};

console.log("executou o loop");

debugger;

if (c > 5) { // Se c for maior que 5
    c = 25; // c recebe 25
};*/

// 4 - Tratamento de dados.

console.log("4 - Tratamento de dados");

// Não da para confiar nos dados que vem do usuário, por isso é importante fazer um tratamento de dados, criar validações para que o usuário não consiga inserir dados que não são permitidos.

function checknumber(n) {
    const result = Number(n); // Converte o valor de n para um número.

    if (Number.isNaN(result)) { // Se result não for um número
        console.log("Valor incorreto!"); // Exibe a mensagem "Valor incorreto!"
        return;
    } 

    console.log("Valor correto!"); // Exibe a mensagem "Valor correto!"
    return result;
};

checknumber(5); // Valor correto!
checknumber("10"); // Valor correto!
checknumber({}); // Valor incorreto!
checknumber("teste"); // Valor incorreto!

// 5 - Exception

console.log("5 - Exception");

// O objeto Error representa um erro. Quando ocorre um erro, o JavaScript gerará um objeto contendo as informações sobre o erro. O objeto Error também pode ser usado como um construtor para criar um objeto de erro, para isso usamos a expressão throw new Error().

let x = 10;

/*if (x != 11) { // Se x for diferente de 11
    throw new Error("O valor de x não pode ser diferente de 11!"); // Exibe a mensagem "O valor de x não pode ser diferente de 11!"
};*/

// 6 - Try...Catch

console.log("6 - Try...Catch");

// O bloco try...catch é usado para manipular exceções. O bloco try contém o código que pode gerar exceções, e o bloco catch contém o código que trata as exceções. O bloco finally é executado após o bloco try e o bloco catch, independentemente de uma exceção ter sido lançada ou não.

try {
    const soma =  x + y; // Tenta somar x + y
} catch (error) { // Se ocorrer um erro
    console.log(`Erro no programa: ${error}`); // Exibe a mensagem "Erro no programa: ReferenceError: y is not defined"
};

// 7 - Finally

console.log("7 - Finally");

// O bloco finally é executado após o bloco try e o bloco catch, independentemente de uma exceção ter sido lançada ou não.

try {
    const value = checknumber("1"); // Tenta executar a função checknumber

    if (!value) { // Se value for verdadeiro
        throw new Error("Valor inválido!"); // Exibe a mensagem "Valor inválido!"
    }
} catch (error) { // Se ocorrer um erro
    console.log(`Erro no programa: ${error}`); // Exibe a mensagem "Erro no programa: Valor inválido!"
} finally {
    console.log("Fim do programa!"); // Exibe a mensagem "Fim do programa!"
};

// 8 - Assertions

console.log("8 - Assertions");

// Assertions são quando os tratamentos de valores passados por usuários, geram um erro. isso ajuda no desenvolvimento do programa, pois o erro é identificado e corrigido antes de ser lançado para o usuário.

function checkArray(arr) { // Função que verifica se o valor passado é um array
    if (arr.length === 0) { // Se o array estiver vazio
        throw new Error("O array não pode ser vazio!"); // Exibe a mensagem "O array não pode ser vazio!"
    } else {
        console.log(`O array possui ${arr.length} elementos!`); // Exibe a mensagem "O array possui x elementos!"
    }
}

//checkArray([]); // Erro: O array não pode ser vazio!

checkArray([1, 2, 3]); // O array não pode ser vazio!