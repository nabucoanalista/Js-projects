// Programação assíncrona.
// O que é programação assíncrona?
// Programação assíncrona é um paradigma de programação em que um trecho de código não precisa esperar o fim de outro para ser executado.

// 1 - Função setTimeout

console.log("1 - Função setTimeout");

// A função setTimeout é uma função nativa do JavaScript que permite que você agende a execução de uma função para um determinado momento no futuro. O código fica rodando normalmente, e quando o tempo determinado chega, a função é executada.

console.log("Início do código"); // Estado inicial do código

setTimeout(function() { // Função que será executada após 2 segundos
    console.log("Executando função após 2 segundos");
}, 2000);

console.log("Fim do código"); // Estado final do código

// Explicação: O código acima irá imprimir no console a seguinte sequência de mensagens: "Início do código", "Fim do código" e "Executando função após 2 segundos". Isso acontece porque a função setTimeout não bloqueia a execução do código, ou seja, o código continua rodando normalmente enquanto a função setTimeout aguarda o tempo determinado para executar a função passada como parâmetro.

// 2 - Função setInterval

console.log("2 - Função setInterval");

// A função setInterval é semelhante à função setTimeout, mas ao invés de executar a função passada como parâmetro uma única vez, ela executa a função repetidamente em intervalos de tempo determinados. É como um loop infinito que executa a função a cada intervalo de tempo.

console.log("Ainda não começou"); // Estado inicial do código

/*setInterval(function() { // Função que será executada a cada 2 segundos
    console.log("Executando função a cada 2 segundos");
}, 2000); // Intervalo de 2 segundos*/

console.log("Ainda não terminou"); // Estado final do código

// Cuide com o uso do setInterval, pois ele pode causar problemas de performance se não for usado com cuidado. Se você não precisa que a função seja executada indefinidamente, é melhor usar a função setTimeout.

// 3 - Promises

console.log("3 - Promises");

// Promises são objetos que representam a eventual conclusão ou falha de uma operação assíncrona. Uma Promise é um objeto que representa o sucesso ou a falha de uma operação assíncrona. Uma Promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função.

const promessa = Promise.resolve(5 + 5); // Criação de uma Promise

console.log("Algum código"); // Estado inicial do código

promessa
    .then((value) => { // Método then que será executado quando a Promise for resolvida
        console.log(`A soma é: ${value}`); // Mensagem que será exibida no console
        return value; // Retorno do valor da Promise
    })
    .then((value) => value - 1) // Método then que será executado quando a Promise for resolvida
    .then((value) => console.log(`Agora é: ${value}`)) // Método then que será executado quando a Promise for resolvida
console.log("Outro código"); // Estado final do código

// Explicação: O código acima irá imprimir no console a seguinte sequência de mensagens: "Algum código", "A soma é: 10", "Agora é: 9" e "Outro código". Isso acontece porque a Promise é resolvida imediatamente, e os métodos then são executados em sequência, sem bloquear a execução do código.

// 4 - Falha de uma Promise

console.log("4 - Falha de uma Promise");

// Uma Promise pode ser resolvida ou rejeitada. Quando uma Promise é rejeitada, o método catch é executado, e a execução do código continua normalmente.

Promise.resolve(4 * "asdf") // Criação de uma Promise que será rejeitada
.then((n) => { // Método then que será executado quando a Promise for resolvida
    if (Number.isNaN(n)) { // Verificação se o valor da Promise é um número
        throw new Error("Valor inválido"); // Lançamento de um erro
    } 
})
.catch((err) => console.log(`Ocorreu um erro: ${err}`)); // Método catch que será executado quando a Promise for rejeita

// Explicação: O código acima irá imprimir no console a seguinte mensagem: "Ocorreu um erro: Error: Valor inválido". Isso acontece porque a Promise é rejeitada, e o método catch é executado, sem bloquear a execução do código.

// 5 - Rejeitando uma Promise

console.log("5 - Rejeitando uma Promise");

// A rejeição, diferente do erro, ocorre quando nós decidimos ejetar uma Promise. Isso pode ser feito com a função reject.

function checkNumber(n) { // Criação de uma função
    return new Promise((resolve, reject) => { // Criação de uma Promise
        if (n > 10) { // Verificação se o número é maior que 10
            resolve(`O número é maior que 10`); // Resolução da Promise
        } else {
            reject(new Error("Número muito baixo")); // Rejeição da Promise
        }
    });
} 

const a = checkNumber(20); // Chamada da função checkNumber

const b = checkNumber(10); // Chamada da função checkNumber

a.then((v) => console.log(`O resultado é: ${v}`)).catch((err) => 
    console.log(`Ocorreu um erro: ${err}`)
); // Método then e catch que será executado quando a Promise for resolvida ou rejeitada 

b.then((v) => console.log(`O resultado é: ${v}`)).catch((err) => 
    console.log(`Ocorreu um erro: ${err}`)
); // Método then e catch que será executado quando a Promise for resolvida ou rejeitada

// Explicação: O código acima irá imprimir no console a seguinte sequência de mensagens: "O resultado é: O número é maior que 10" e "Ocorreu um erro: Error: Número muito baixo". Isso acontece porque a Promise a é resolvida, e a Promise b é rejeitada, e os métodos then e catch são executados em sequência, sem bloquear a execução do código.

// 6 - Resolvendo várias Promises

console.log("6 - Resolvendo várias Promises");

// A função Promise.all recebe um array de Promises e retorna uma nova Promise que é resolvida quando todas as Promises do array forem resolvidas, ou rejeitada quando uma das Promises do array for rejeitada.

const p1 = new Promise((resolve, reject) => { // Criação de uma Promise
    setTimeout(function() { // Função que será executada após 1 segundos
        resolve(10); // Resolução da Promise
    }, 1000); // Intervalo de 1 segundos
});

const p2 = Promise.resolve(10 + 10); // Criação de uma Promise

const p3 = new Promise((resolve, reject) => { // Criação de uma Promise
    if (30 > 10) { // Verificação se o número é maior que 10
        resolve(30); // Resolução da Promise
    } else {
        reject("Erro!"); // Rejeição da Promise
    }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values)); // Método then que será executado quando todas as Promises forem resolvidas

// Explicação: O código acima irá imprimir no console a seguinte mensagem: "[10, 20, 30]". Isso acontece porque todas as Promises são resolvidas, e o método then é executado, sem bloquear a execução do código, logo após todas as Promises serem resolvidas.

// 7 - Async Functions

console.log("7 - Async Functions");

// Async Functions são funções que retornam Promises. Elas são construídas sobre Promises e são uma maneira mais limpa e mais simples de trabalhar com código assíncrono. Consequeentemente há a possibilidade de receber o resultado delas depois, além da utilização dos métodos de Promise.

async function somarComDelay(a, b) {
    return a + b;
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`);
});

console.log("Teste Async");

// Explicação: O código acima irá imprimir no console a seguinte sequência de mensagens: "Teste Async" e "O valor da soma é: 6". Isso acontece porque a função somarComDelay retorna uma Promise, e o método then é executado quando a Promise é resolvida, sem bloquear a execução do código.

// 8 - Await

console.log("8 - Await");

// A palavra-chave await é usada para esperar a resolução de uma Promise. Ela só pode ser usada dentro de funções assíncronas. Tornando mas simples lidar com esse tipo de função, assim não precisamos trabalhar diretamente com os métodos de Promise.

function resolveComDelay() { // Criação de uma função
    return new Promise(resolve => { // Criação de uma Promise
        setTimeout(() => { // Função que será executada após 2 segundos
            resolve("Resolvido!"); // Resolução da Promise
        }, 2000); // Intervalo de 2 segundos
    });
}

async function ChamadaAsync() { // Criação de uma função assíncrona
    console.log("Chamando a promise, e esperando a resolução..."); // Mensagem que será exibida no console
    const result = await resolveComDelay(); // Chamada da função resolveComDelay
    console.log(`O resultado chegou: ${result}`); // Mensagem que será exibida no console
}

ChamadaAsync(); // Chamada da função ChamadaAsync

// Explicação: O código acima irá imprimir no console a seguinte sequência de mensagens: "Chamando a promise, e esperando a resolução..." e "O resultado chegou: Resolvido!". Isso acontece porque a função ChamadaAsync espera a resolução da Promise retornada pela função resolveComDelay, e o código continua rodando normalmente enquanto a Promise é resolvida.

// 9 - Generators

console.log("9 - Generators");

// Generators são funções especiais que podem ser pausadas e retomadas. Eles são criados usando a palavra-chave function* e usam a palavra-chave yield para pausar a execução da função.

function* gerador() { // Criação de um generator
    yield 1; // Pausa a execução da função
    yield 2; // Pausa a execução da função
    yield 3; // Pausa a execução da função
}

const gen = gerador(); // Chamada do generator

console.log(gen.next().value); // Mensagem que será exibida no console
console.log(gen.next().value); // Mensagem que será exibida no console
console.log(gen.next().value); // Mensagem que será exibida no console

// Explicação: O código acima irá imprimir no console a seguinte sequência de mensagens: "1", "2" e "3". Isso acontece porque a função gerador é um generator, e a função next é usada para retomar a execução da função, e o valor retornado pela função yield é retornado pelo método next.