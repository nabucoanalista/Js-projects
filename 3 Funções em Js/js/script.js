// 1 - Criando uma função.

console.log("1 - Criando uma função");

// 1 voce cria a função.
function minhaFuncao() {
    console.log("Minha primeira função");
}

// 2 voce chama a função.

minhaFuncao(); // Pode chamar quantas vezes quiser.
minhaFuncao();

// Função com variavel.
// Na função com variavel, voce pode chamar a função antes de declarar a função. Isso acontece porque o interpretador do JS, primeiro carrega todas as funções e depois executa o código.

const minhaFuncaoVar = function () { // Função anonima.
    console.log("Minha primeira função com var");
} // P.s: o const é usado para criar uma constante, mas também pode ser usado para criar uma função.

minhaFuncaoVar();

// Adifereça entre as duas funções é que a primeira é uma função nomeada e a segunda é uma função anonima. Afunção anomima não pode ser subscrita no código, mas a função nomeada pode ser subscrita. Por segurança, é melhor usar a função anonima.

// Função com parametro.

// Função com parametro é uma função que recebe um valor e faz alguma coisa com esse valor.

function funcaoComParametro(txt) { // txt é o parametro.
    console.log(`Imprimindo: ${txt}`); // O parametro é usado dentro da função.
}

funcaoComParametro("Olá mundo"); // O valor que é passado para a função é chamado de argumento.

funcaoComParametro("Olá mundo 2");

// 2 - Retorno de uma função.

console.log("2 - Retorno");

// O retorno de uma função é o valor que a função retorna para o código que a chamou. O retorno é feito com a palavra reservada return. O return pode ser usado em qualquer lugar da função, mas quando o interpretador encontra o return, ele para de executar a função.

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) { // n1 e n2 são os parametros.
    return n1 + n2; // O return retorna o valor da soma para o código que chamou a função.
}

const resultado = soma(a, b); // a e b são os argumentos.

console.log(resultado); // O resultado é o valor que a função retornou.

console.log(soma(c, d)); // Dessa forma não é necessário criar uma variavel para receber o retorno da função.

// 3 - Escopo de uma função.

console.log("3 - Escopo");

// Escopo é o local onde a variavel foi criada. Uma variavel criada dentro de uma função, só pode ser usada dentro da função. Uma variavel criada fora da função, pode ser usada dentro da função.

let y = 10; // Variavel global. P.s: variavel global é uma variavel que pode ser usada em qualquer lugar do código. o let é usado para criar uma variavel, mas também pode ser usado para criar uma função.

function testandoEscopo() {
    let y = 20; // Variavel local. P.s: variavel local é uma variavel que só pode ser usada dentro da função.
    console.log(`y dentro da função é: ${y}`);
}

testandoEscopo();

console.log(`y fora da função é: ${y}`);

testandoEscopo();

// Escopo de uma função aninhada.

// Uma função aninhada é uma função dentro de outra função. Uma função aninhada pode usar let e const, mas não pode usar var.

let m = 10;

function escopoAninhado() {
    let m = 20;

    if (true) {
        let m = 30;

        if (true) {
            let m = 40;

            console.log(m);
        }

        console.log(m);
    }

    console.log(m);
}

escopoAninhado();

console.log(m);

// 4 - Arrow function.

console.log("4 - Arrow function");

// Arrow function é uma forma mais simples de criar uma função. A arrow function é criada com uma seta =>. A arrow function não pode ser usada como uma função construtora.

const testeArrow = () => { // A arrow function não tem nome.
    console.log("Teste arrow function");
}

testeArrow();

const parOuImpar = (n) => { // A arrow function pode receber parametros.
    if (n % 2 == 0) { // O if não precisa de chaves quando tem apenas uma linha de código.
        console.log("Par"); 
        return; // O return não precisa ser usado quando tem apenas uma linha de código.
    } // Poderiamo usar o else, mas não é necessário.

    console.log("Impar"); // O console.log não precisa de chaves quando tem apenas uma linha de código. e o console.log não precisa de return.
};

parOuImpar(5); // A arrow function pode ser chamada antes de ser declarada.

parOuImpar(10);

// Podemos usar uma sintaxe mais curta para retornar um valor, Onde omitimos a palavra reservada return e as chaves.

const raizQuadrada = (x) => { // A arrow function pode receber parametros.
    return x * x; 
}

console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x; // A arrow function pode ser escrita em uma linha.

console.log(raizQuadrada2(5)); // A arrow function pode ser chamada antes de ser declarada.

console.log(raizQuadrada(12)); 

const helloWorld = () => console.log("Hello world");

helloWorld();

console.log(helloWorld()); // A arrow function não tem retorno, por isso o console.log retorna undefined.

// 5 - Parâmetros opcionais.

console.log("5 - Parâmetros opcionais");

// Parâmetros opcionais são parâmetros que não precisam ser passados para a função. Parâmetros opcionais são criados com um valor padrão. funções sem parâmetros, podem ser checadas o parametro com um if.

const multiplicar = function (m, n) { // m e n são os parametros.
    if (n === undefined) { // Se o parametro n não for passado, o valor padrão é 2.
        return m * 2; // O return retorna o valor da multiplicação para o código que chamou a função.
    } else { // Se o parametro n for passado, o valor padrão é o valor passado.
        return m * n; 
    }
    
};

console.log(multiplicar(5)); // O valor padrão é 5, por isso o resultado é 10.

console.log(multiplicar(2, 4)); // O valor padrão é 4, por isso o resultado é 8.

// Um exemplo mais proximo da realidade é uma função que sauda uma pessoa. Se o nome da pessoa não for passado, a função sauda o mundo.

const greeting = function (name) { // name é o parametro e greeting é o nome da função.

    if (!name) { // usei o ! para verificar se o name é falso.
        console.log("Olá mundo"); // O valor padrão é undefined, por isso o resultado é Olá mundo.
        return // O return não precisa ser usado quando tem apenas uma linha de código.
    }

    console.log(`Olá ${name}`); // O valor padrão é o valor passado, por isso o resultado é Olá João.
}

greeting(); // O valor padrão é undefined, por isso o resultado é Olá mundo.

greeting("João"); // O valor padrão é João, por isso o resultado é Olá João.

// 6 - Valores padrão. "Default parameters"

console.log("6 - Valores padrão");

// Valores padrão são valores que são passados para a função, quando o parametro não é passado. Valores padrão são criados com um valor padrão, São subistituidos geralmente quando atribuimos um valor.

const customGreeting = (name, greet = "Olá") => { // name é o parametro e greeting é o nome da função.
    return `${greet} ${name}!`; // O ! como está fora da string, não é subistituido, logo ele vai estar sempre no final da impressão.
}

console.log(customGreeting("João")); // O valor padrão é Olá, por isso o resultado é Olá João.

console.log(customGreeting("Beto", "Como vai")); // O valor padrão é Como vai, por isso o resultado é Como vai Beto.

// Outro exemplo, agora de um repetidor de palavras.

const repeatText = (txt, repeat = 2) => { // txt e repeat são os parametros e repeaText é o nome da função.
    for (let i = 0; i < repeat; i++) { // O for vai repetir o texto até o valor de repeat.
        console.log(txt); // O txt é o valor passado para a função.
    }
};

repeatText("Olá mundo"); // O valor padrão é 2, por isso o resultado é Olá mundo duas vezes.

repeatText("Olá mundo", 5); // O valor padrão é 5, por isso o resultado é Olá mundo cinco vezes.

// 7 - Closure.

console.log("7 - Closure");

// Closure é uma função que tem acesso ao escopo de outra função. Closure é criado quando uma função é retornada de outra função. Closure é usado para criar funções privadas. Closure é usado para criar funções que podem ser usadas em qualquer lugar do código. 

function someFunction() { // someFunction é uma função global.
    let txt = "Olá mundo"; // txt é uma variavel local.

    function display() { // display é uma função local.
        console.log(txt); // display tem acesso ao escopo de someFunction.
    }

    display(); // display é chamada dentro de someFunction.
}

someFunction(); // someFunction é chamada fora de someFunction.

// Exemplo de closure um pouco mais complexo.

const multiClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiClosure(5); // c1 é uma função que tem acesso ao escopo de multiClosure.

const c2 = multiClosure(10); // c2 é uma função que tem acesso ao escopo de multiClosure.

console.log(c1); // c1 é uma função que tem acesso ao escopo de multiClosure.

console.log(c2); // c2 é uma função que tem acesso ao escopo de multiClosure.

// Da forma que está, aparecerá no console que c1 e c2 são funções, mas não aparecerá o valor que elas retornam. Para aparecer o valor que elas retornam, é necessário chamar as funções.Porém os valores estão armazenados em c1 e c2, por isso não é necessário passar os argumentos novamente.

console.log(c1(5)); // c1 é uma função que tem acesso ao escopo de multiClosure, por isso o resultado é 25.

console.log(c2(10)); // c2 é uma função que tem acesso ao escopo de multiClosure, por isso o resultado é 100.

// 8 - Funções auto invocadas. "Reursion"

console.log("8 - Funções auto invocadas");

// Funções auto invocadas são funções que se chamam. Também são criadas com parenteses no final da função.

const contAte10 = (n, m) => { // n e m são os parametros e contAte10 é o nome da função.
    if (n < 10) { // Se n for menor que 10, a função se chama novamente.
        console.log("A função parou de se chamar"); // O console.log não precisa de chaves quando tem apenas uma linha de código.
    } else { // Se n não for menor que 10, a função se chama novamente.
        const x = n - m; // O x é o valor que a função retorna.
        
        console.log(x);

        contAte10(x, m); // A função se chama novamente.
    }
};

contAte10(100, 7); // O valor padrão é 100, por isso o resultado é 100.

// vou colocar um loop para ficar mais claro, poreém não vou executar o código pois ele é infinito e vai travar o navegador.

/* infinite loop

function rum() {
    console.log("Executando a função rum"); 
    rum(); 
}

rum();

*/ // esse código é um exemplo de função loop infinito.

// Exemplo de uma fatorial.

function fatorial(x) {
    if (x === 0) { // Se x for igual a 0, a função retorna 1.
        return 1;
    } else { // Se x não for igual a 0, a função retorna x * fatorial(x - 1).
        return x * fatorial(x - 1);
    }
};

const num = 6; // O num é o valor que a função retorna.

const result = fatorial(num); // O result é o valor que a função retorna.

console.log(`O fatorial de ${num} é ${result}`); // O console.log não precisa de chaves quando tem apenas uma linha de código.