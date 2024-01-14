// 1 - Arrays.

console.log("1 - Arrays");

// Array é uma estrutura de dados que permite armazenar vários valores em uma única variável. Os valores são separados por vírgula e separados por colchetes.

const alunos = ["Luis", "Maria", "João"]; // Array de strings.

console.log(alunos); // [ 'Luis', 'Maria', 'João' ]

console.log(typeof alunos); // object

// Podemos tambem criar um array de dados de tipos diferentes.

const alunos2 = ["Luis", 23, true, 1.5]; // Array de tipos diferentes.

console.log(alunos2); // [ 'Luis', 23, true, 1.5 ]

// Podemos acessar os valores de um array utilizando o índice do valor desejado.

console.log(alunos[0]); // Luis - Primeiro valor do array e começa com o índice 0.

console.log(alunos[5]); // undefined - Não existe o índice 5 no array.

// 2 - Propriedades.

console.log("2 - Propriedades");

// Propriedades são características que um objeto possui. Podemos acessar essas propriedades utilizando o ponto (.) e o nome da propriedade.

const alunos3 = ["Luis", "Maria", "João"]; // Array de strings.

console.log(alunos3.length); // 3

console.log(alunos3["length"]); // 3

// length é uma propriedade que retorna o tamanho do array e pode ser acessada utilizando o ponto (.) ou colchetes ([]).

const contcharn = "Ibercson"; // String com 8 caracteres.

console.log(contcharn.length); // 8 - Retorna o tamanho da string.

// 3 - Métodos.

console.log("3 - Métodos");

// Métodos são ações que podemos executar em objetos. Podemos utilizar o ponto (.) para acessar os métodos de um objeto. Objeto é um tipo de dado que permite armazenar diversos valores em uma variável.

const alunos4 = ["Beto", "Ana", "Pedro"]; // Array de strings.

const allalunos = alunos3.concat(alunos4); // Concatena os dois arrays.

console.log(allalunos); // [ 'Luis', 'Maria', 'João', 'Beto', 'Ana', 'Pedro' ]

// Aconselho a consultar a documentação do JavaScript para conhecer todos os métodos disponíveis para arrays. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array vou colocar outros exemplos aqui.

const ficarMaiusculo = alunos3.join(' - ').toUpperCase(); // Transforma os valores do array em maiúsculo e separa por Traço.

console.log(ficarMaiusculo); // LUIS - MARIA - JOÃO

console.log(typeof ficarMaiusculo.toUpperCase); // function o typeof serve para saber o tipo de dado.

console.log(alunos3.indexOf("Luis")); // 0 - Retorna o índice do valor pesquisado.

// 4 - Objetos.

console.log("4 - Objetos");

// Objetos são estruturas de dados que permitem armazenar diversos valores em uma variável, permitindo acessá-los por meio de um nome. Os valores são escritos no formato chave: valor.

const aluno = { // Objeto.
    nome: "Luis", 
    idade: 23,
    aprovado: true,
    notas: [8, 9, 7, 10]
};

console.log(aluno); // { nome: 'Luis', idade: 23, aprovado: true, notas: [ 8, 9, 7, 10 ] }

console.log(aluno.nome); // Luis - Acessando o valor da chave nome.

console.log(aluno.nome.length) // 4 - Acessando o tamanho do valor da chave nome.

console.log(typeof aluno); // object

// 5 - Adicionando e removendo propriedades.

console.log("5 - Adicionando e removendo propriedades");

// Podemos adicionar novas propriedades a um objeto utilizando o ponto (.) e o nome da propriedade e atribuindo um valor a ela, para remover uma propriedade basta utilizar a palavra reservada delete.

const car = {
    name: "Fiat",
    model: "Uno",
    ano: 2021,
    km: 2000,
};

console.log(car); // { name: 'Fiat', model: 'Uno', ano: 2021, km: 2000 }

car.cor = "Vermelho"; // Adicionando a propriedade cor.

console.log(car); // { name: 'Fiat', model: 'Uno', ano: 2021, km: 2000, cor: 'Vermelho' }

delete car.km; // Removendo a propriedade km.

console.log(car); // { name: 'Fiat', model: 'Uno', ano: 2021, cor: 'Vermelho' }

// P.S: A diferença entre objetos e arrays é que os objetos possuem chaves e os arrays possuem índices. Os objetos são mais utilizados para armazenar dados que possuem características e os arrays são mais utilizados para armazenar listas de dados.

// 6 - Objetos.

console.log("6 - Objetos");

// O metodo assign() é utilizado para copiar os valores de todas as propriedades de um ou mais objetos para um objeto destino. Ele retorna o objeto destino. O método Object.assign() é estático, ou seja, ele é chamado diretamente do construtor Object e não do protótipo de Object. Um objeto ou array criado com const pode ser alterado, mas não pode ser reatribuído.

const obj = {
    a: "Teste",
    b: true,
};

console.log(obj instanceof Object); // true - Verifica se o objeto é uma instância de Object.

const obj2 = {
    c: [],
};

Object.assign(obj2, obj); // Copia os valores de todas as propriedades de um ou mais objetos para um objeto destino.

console.log(obj2); // { c: [], a: 'Teste', b: true }

Object.assign(obj, obj2); // Copia os valores de todas as propriedades de um ou mais objetos para um objeto destino.

console.log(obj); // { a: 'Teste', b: true, c: [] }

// Lembrando que o método Object.assign() é estático, ou seja, ele é chamado diretamente do construtor Object e não do protótipo de Object. O original não é alterado.

// 7 - Conhecendo melhor o objeto.

console.log("7 - Conhecendo melhor o objeto");

// O método Object.keys() retorna um array com as propriedades e métodos de um objeto, na mesma ordem em que são mostradas através de um loop for...in (a diferença é que um loop for-in também enumera as propriedades na cadeia de protótipos). O método entries, recebemos arrays dos valores.

console.log(Object.keys(obj)); // Mostra a lista de obj
console.log(Object.keys(obj2)); // Motra a lista de obj2
console.log(Object.keys(car)); // Mostra a lista de car

console.log(Object.entries(car)); // Mostra a lista de car

// 8 - Mutação Mutability.

console.log("8 - Mutação Mutability");

// Mutabilidade é a capacidade de um objeto ser alterado após sua criação, ou seja, podemos adicionar, remover e alterar propriedades de um objeto. Os objetos são mutáveis, ou seja, podemos alterar suas propriedades.

const a = {
    nome: "Beto",
};

const b = a;

console.log(a); // { nome: 'Beto' }
console.log(b); // { nome: 'Beto' }

console.log(a === b); // true - Comparando os objetos.

// Alerta pois podemos alterar o objeto b e o objeto a será alterado também.

a.idade = 23;

console.log(a); // { nome: 'Beto', idade: 23 }
console.log(b); // { nome: 'Beto', idade: 23 }

delete b.nome;

console.log(a); // { idade: 23 }
console.log(b); // { idade: 23 }

// 9 - Loop em arrays.

console.log("9 - Loop em arrays");

// Podemos percorrer um array utilizando o loop for, for...of ou forEach. O loop for é o mais utilizado para percorrer arrays. Isso evita repetição de código.

const mercado = ["Arroz", "Feijão", "Macarrão", "Carne", "Frango"]; // Array de strings.

for (let i = 0; i < mercado.length; i++) { // Percorre o array.
    console.log(`Produto: ${mercado[i]}`); // Produto: Arroz Produto: Feijão Produto: Macarrão Produto: Carne Produto: Frango
};

console.log(`Total de produtos: ${mercado.length}`); // Total de produtos: 5

// 10 - Push e Pop.

console.log("10 - Push e Pop");

// O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. O método pop() remove o último elemento de um array e retorna aquele elemento.

const mercado2 = ["Arroz", "Feijão", "Macarrão", "Carne", "Frango"]; // Array de strings.

mercado2.push("Peixe"); // Adiciona o elemento Peixe ao final do array.

console.log(mercado2); // [ 'Arroz', 'Feijão', 'Macarrão', 'Carne', 'Frango', 'Peixe' ]

console.log(mercado2.pop()); // Peixe - Remove o último elemento do array.

console.log(mercado2); // [ 'Arroz', 'Feijão', 'Macarrão', 'Carne', 'Frango' ]

const itemRemovido = mercado2.pop(); // Remove o último elemento do array e armazena na variável itemRemovido.

console.log(itemRemovido); // Frango

console.log(mercado2); // [ 'Arroz', 'Feijão', 'Macarrão', 'Carne' ]

mercado2.push("Peixe", "Ovo", "Batata"); // Adiciona os elementos Peixe, Ovo e Batata ao final do array.

console.log(mercado2); // [ 'Arroz', 'Feijão', 'Macarrão', 'Carne', 'Peixe', 'Ovo', 'Batata' ]

// 11 - Shift e Unshift 

console.log("11 - Shift e Unshift");

// O método shift() remove o primeiro elemento de um array e retorna esse elemento. O método unshift() adiciona um ou mais elementos ao início de um array e retorna o número de elementos (propriedade length) atualizado.

const cores = ["Azul", "Vermelho", "Verde", "Amarelo"]; // Array de strings.

console.log(cores); // [ 'Azul', 'Vermelho', 'Verde', 'Amarelo' ]

const corRemovida = cores.shift(); // Remove o primeiro elemento do array e armazena na variável corRemovida.

console.log(corRemovida); // Azul

console.log(cores); // [ 'Vermelho', 'Verde', 'Amarelo' ]

cores.unshift("Rosa"); // Adiciona o elemento Rosa ao início do array.

cores.unshift("Preto", "Branco", "Cinza"); // Adiciona os elementos Preto, Branco e Cinza ao início do array.

console.log(cores); // [ 'Preto', 'Branco', 'Cinza', 'Rosa', 'Vermelho', 'Verde', 'Amarelo' ]

// 12 - IndexOf e LastIndexOf.

console.log("12 - IndexOf e LastIndexOf");

// O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente. O método lastIndexOf() retorna o último índice em que o elemento pode ser encontrado no array, ou -1 se o mesmo não estiver presente. O array é pesquisado de trás para frente, começando pelo fromIndex.

const filmes = ["Star Wars", "Matrix", "Clube da Luta", "Interestelar", "O Rei Leão"]; // Array de strings.

console.log(filmes.indexOf("Star Wars")); // 0 - Retorna o índice do valor pesquisado.

console.log(filmes.indexOf("O Rei Leão")); // 4 - Retorna o índice do valor pesquisado.

console.log(filmes[1]); // Matrix

console.log(filmes[filmes.indexOf("Clube da Luta")]); // Clube da Luta

console.log(filmes.lastIndexOf("Star Wars")); // 0 - Retorna o índice do valor pesquisado.

console.log(filmes.lastIndexOf("Liga da Justiça")); // -1 - Retorna -1 pois o valor pesquisado não existe no array.

console.log(filmes.indexOf("Liga da Justiça")); // -1 - Retorna -1 pois o valor pesquisado não existe no array.

// 13 - Slice.

console.log("13 - Slice");

// O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.

const legumes = ["Batata", "Cenoura", "Beterraba", "Mandioca", "Abóbora"]; // Array de strings.

const legumes2 = legumes.slice(1, 3); // Retorna uma cópia de parte do array original.

console.log(legumes2); // [ 'Cenoura', 'Beterraba' ]

console.log(legumes); // [ 'Batata', 'Cenoura', 'Beterraba', 'Mandioca', 'Abóbora' ]

const legumes3 = legumes.slice(2, 4 + 1); // Retorna uma cópia de parte do array original.

console.log(legumes3); // [ 'Beterraba', 'Mandioca', 'Abóbora' ]

const legumes4 = legumes.slice(10, 20); // Retorna uma cópia de parte do array original.

console.log(legumes4); // [] - Retorna um array vazio pois não existe os índices 10 e 20 no array original.

const legumes5 = legumes.slice(2); // Retorna uma cópia de parte do array original.

console.log(legumes5); // [ 'Beterraba', 'Mandioca', 'Abóbora' ] - Retorna os valores a partir do índice 2.

// 14 - forEach.

console.log("14 - forEach");

// O método forEach() executa uma dada função em cada elemento de um array.

const estados = ["São Paulo", "Rio de Janeiro", "Minas Gerais", "Espírito Santo"]; // Array de strings.

estados.forEach((estado) => { // Percorre o array.
    console.log(`${estado} pertence a região sudeste do Brasil.`); // São Paulo pertence a região sudeste do Brasil. Rio de Janeiro pertence a região sudeste do Brasil. Minas Gerais pertence a região sudeste do Brasil. Espírito Santo pertence a região sudeste do Brasil.
});

const numeros = [1, 2, 3, 4, 5]; // Array de números.

numeros.forEach((numero) => { // Percorre o array.
    console.log(`O número é ${numero}`); // O número é 1 O número é 2 O número é 3 O número é 4 O número é 5
});

const post = [
    { titulo: "JavaScript", ordem: "Post Um" },
    { titulo: "HTML", ordem: "Post Dois" },
    { titulo: "CSS", ordem: "Post Três" },
];

post.forEach((post) => { // ps: o nome da variável pode ser qualquer um, aconselho a colocar o mesmo nome do array... mas caso queira colocar outro nome, não tem problema. ex: post e no forEach (posts)
    console.log(`${post.ordem}: Linguagem - ${post.titulo}`); // Post Um: Linguagem - JavaScript Post Dois: Linguagem - HTML Post Três: Linguagem - CSS
});

// 15 - Includes.

console.log("15 - Includes");

// O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.

const frutas = ["Banana", "Maçã", "Pera", "Uva"]; // Array de strings.

console.log(frutas.includes("Banana")); // true - Retorna true pois o valor pesquisado existe no array.

console.log(frutas.includes("Laranja")); // false - Retorna false pois o valor pesquisado não existe no array.

if (frutas.includes("Banana")) { // Verifica se o valor pesquisado existe no array.
    console.log("A fruta Banana existe no array."); // A fruta Banana existe no array.
} else {
    console.log("A fruta Banana não existe no array.");
}

if (frutas.includes("Laranja")) { // Verifica se o valor pesquisado existe no array.
    console.log("A fruta Laranja existe no array.");
} else {
    console.log("A fruta Laranja não existe no array."); // A fruta Laranja não existe no array.
}

// 16 - Reverse.

console.log("16 - Reverse");

// O método reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro. O array original é modificado, muito cuidado ao utilizar esse método.

const numeros2 = [1, 2, 3, 4, 5]; // Array de números.

numeros2.reverse(); // Inverte os itens do array.

console.log(numeros2); // [ 5, 4, 3, 2, 1 ]

// Quando utilizar o método reverse? Quando precisar inverter a ordem dos itens de um array. Exemplo: Ordenar uma lista de itens do maior para o menor.

// 17 - Métodos de string.

console.log("17 - Métodos de string");

// O JavaScript possui diversos métodos para manipular strings. Acesse a documentação do JavaScript para conhecer todos os métodos disponíveis para strings. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String As strings são objetos, portanto, possuem propriedades e métodos. Alguns são semelhantes aos métodos de arrays. Podemos utilizar length em strings ou arrays.

// 18 - trim.

console.log("18 - trim");

// O método trim() remove os espaços em branco (whitespaces) do início e/ou fim de um texto. O método trim() não altera o valor da string original.

const texto = "   JavaScript   "; // String com espaços em branco.

console.log(texto); //    JavaScript

console.log(texto.trim()); // JavaScript - Remove os espaços em branco do início e fim da string.

console.log(texto.length); // 17 - Retorna o tamanho da string.

console.log(texto.trim().length); // 10 - Retorna o tamanho da string sem os espaços em branco.

// 19 - padStart.

console.log("19 - padStart");

// O método padStart() preenche a string original com uma determinada string (repetida, se necessário) para que a string resultante alcance um determinado comprimento. O preenchimento é aplicado antes do primeiro caractere da string original. O método padStart() não altera o valor da string original.

const telefone = "12345"; // String com 5 caracteres.

const telefoneFormatado = telefone.padStart(9, "*"); // Preenche a string com o caractere * até atingir o tamanho de 9 caracteres.

console.log(telefone); // 12345

console.log(telefoneFormatado); // *****12345

const telefone2 = telefone.padEnd(9, "*"); // Preenche a string com o caractere * até atingir o tamanho de 9 caracteres.

console.log(telefone2); // 12345****

// 20 - split.

console.log("20 - split");

// O método split() divide uma string em um array de strings de acordo com algum separador. Ex: espaço em branco, vírgula, ponto e vírgula, etc. O método split() não altera o valor da string original.

const frase = "JavaScript é uma linguagem de programação"; // String com espaços em branco.

const palavras = frase.split(" "); // Divide a string em um array de strings de acordo com o espaço em branco.

console.log(palavras); // [ 'JavaScript', 'é', 'uma', 'linguagem', 'de', 'programação' ]

// Podemos utilizar o método split() para transformar uma string em um array.

// 21 - join.

console.log("21 - join");

// O método join() junta todos os elementos de um array em uma string e retorna esta string. O separador padrão é a vírgula (,). O método join() não altera o array original.

const frase2 = palavras.join(" "); // Junta todos os elementos do array em uma string.

console.log(frase2); // JavaScript é uma linguagem de programação

// Tambem podemos utilizar o método join() de outras formas.

const itensInfo = ["Notebook", "Monitor", "Teclado", "Mouse", "Cadeira", "Mesa"]; // Array de strings.

const fraseExibir = `Lembrar de comprar: ${itensInfo.join(", ")}`; // Junta todos os elementos do array em uma string.

console.log(fraseExibir); // Lembrar de comprar: Notebook, Monitor, Teclado, Mouse, Cadeira, Mesa

// O método join() é muito utilizado para exibir os valores de um array em uma página HTML.

// 22 - repeat.

console.log("22 - repeat");

// O método repeat() repete um texto n vezes. O método repeat() não altera o valor da string original.

const nome = "Luis "; // String com 5 caracteres.

console.log(nome.repeat(5)); // Luis Luis Luis Luis Luis

// Da para fazer um efeito legal junto com o join.

const nome2 = "Beto"; // String com 4 caracteres.

const repeticoes = new Array(5).fill(nome2); // Cria um array com 5 repetições do nome.

const resultado = repeticoes.join(', ') + '.'; // Junta todas as repetições com uma vírgula e adiciona um ponto no final.

console.log(resultado); // Beto, Beto, Beto, Beto, Beto.

// Ps: no primeiro exemplo, indiquei o espaço em branco para repetir, no segundo exemplo, não indiquei pois o espaço foi colocado dentro do join.

// 23 - RestParameters.

console.log("23 - RestParameters");

// O rest parameter (parâmetro rest) permite que uma função receba um número indefinido de argumentos como um array, Assim não temos que declarar exatamente quantos argumentos uma função deve receber. O rest parameter deve ser sempre o último parâmetro da função e é precedido por três pontos.

const somarInfinito = (...num) => { // Recebe um número indefinido de argumentos como um array.
    let total = 0; // Variável que armazena o total da soma.
    
    for (let i = 0; i < num.length; i++) { // Percorre o array.
        total += num[i]; // Soma os valores do array.
    }

    return total; // Retorna o total da soma.
}

console.log(somarInfinito(1, 2, 3, 4, 5)); // 15

console.log(somarInfinito(10, 20, 30, 40, 50, 200, 300, 400, 500)); // 1550

// Podemos utilizar o rest parameter para receber um número indefinido de argumentos como um array.

// 24 - for...of.

console.log("24 - for...of");

// O for...of é uma estrutura de repetição semelhante ao for convencional, porém mais simples e mais utilizado para percorrer arrays. O for...of percorre os valores do array e não os índices. O for...of não funciona em objetos.

const somarInfinito2 = (...numInf) => { // Recebe um número indefinido de argumentos como um array.
    let total = 0; // Variável que armazena o total da soma.
    
    for (num of numInf) { // Percorre o array.
        total += num; // Soma os valores do array.
    }

    return total; // Retorna o total da soma.
}

console.log(somarInfinito2(1, 2, 3, 4, 5)); // 15

console.log(somarInfinito2(10, 20, 30, 40, 50, 200, 300, 400, 500)); // 1550

// O for...of é muito utilizado para percorrer arrays.

// 25 - destructuring.

console.log("25 - destructuring");

// O destructuring é uma forma de extrair valores de arrays ou objetos em variáveis distintas. O destructuring é muito utilizado para desestruturar objetos e arrays.

const pessoa = {
    primeiroNome: "Ibercson",
    ultimoNome: "Alves",
    idade: 37,
};

const { primeiroNome, ultimoNome, idade } = pessoa; // Desestrutura o objeto pessoa.

console.log(primeiroNome, ultimoNome, idade); // Ibercson Alves 37

// Podemos renomear as variáveis.

const { primeiroNome: nome1, ultimoNome: sobrenome, idade: anos } = pessoa; // Desestrutura o objeto pessoa.

console.log(nome1, sobrenome, anos); // Ibercson Alves 37

// Lembrando que o java script é case sensitive, ou seja, diferencia letras maiúsculas de minúsculas, se colocar o nome da variável com letra maiúscula, vai dar erro.

// 26 - destructuring em arrays.

console.log("26 - destructuring em arrays");

// O destructuring também pode ser utilizado em arrays, a sintaxe muda um pouco, agora utilizamos colchetes e não temos nomer das chaves.

const cores2 = ["Azul", "Vermelho", "Verde", "Amarelo"]; // Array de strings.

const [cor1, cor2, cor3, cor4] = cores2; // Desestrutura o array cores2.

console.log(cor1, cor2, cor3, cor4); // Azul Vermelho Verde Amarelo

// 27 - JSON.

console.log("27 - JSON");

// JSON (JavaScript Object Notation) é um formato de dados muito utilizado para comunicação entre sistemas. JSON é um formato de texto simples para armazenamento e transporte de informações em páginas web, APIs e arquivos. JSON é um formato de dados independente de linguagem, ou seja, pode ser utilizado em diversas linguagens de programação. JSON é um formato de dados muito utilizado para comunicação entre sistemas. JSON é um formato de texto simples para armazenamento e transporte de informações em páginas web, APIs e arquivos. JSON é um formato de dados independente de linguagem, ou seja, pode ser utilizado em diversas linguagens de programação. Regras: Os dados são separados por vírgulas, as chaves são sempre strings e os valores podem ser strings, números, arrays, objetos, booleanos ou null. JSON é um formato de dados independente de linguagem, ou seja, pode ser utilizado em diversas linguagens de programação, Só é permitido utilizar aspas duplas para strings, aspas simples não são permitidas e não é permitido comentários.

const pessoa2 = `{"nome": "Ibercson", "idade": 37, "profissao": "Programador", "skills": ["PHP", "JavaScript", "Python"]}`; // Objeto JSON.

console.log(pessoa2); // {"nome": "Ibercson", "idade": 37, "profissao": "Programador", "skills": ["PHP", "JavaScript", "Python"]}

console.log(typeof pessoa2); // string

// 29 - JSOn para objeto e objeto para JSON.

console.log("29 - JSOn para objeto e objeto para JSON");

// Podemos converter um objeto para JSON utilizando o método JSON.stringify() e converter um JSON para objeto utilizando o método JSON.parse().

const minhaLista = JSON.parse(pessoa2); // Converte um JSON para objeto.

console.log(minhaLista); // { nome: 'Ibercson', idade: 37, profissao: 'Programador', skills: [ 'PHP', 'JavaScript', 'Python' ] }

console.log(minhaLista.nome); // Ibercson - Acessando o valor da chave nome.

console.log(typeof minhaLista); // object

// ALERTA cuidado para não invalidar o JSON, se colocar aspas simples ou campos sem aspas vai dar erro.

// const pessoa3 = {"nome": Ibercson}; // Objeto JSON inválido. - SyntaxError: Unexpected identifier in JSON at position 9 pois não tem aspas no valor da chave nome.

minhaLista.cargo = "UI/UX Designer"; // Adiciona a propriedade cargo ao objeto.

console.log(minhaLista); // { nome: 'Ibercson', idade: 37, profissao: 'Programador', skills: [ 'PHP', 'JavaScript', 'Python' ], cargo: 'UI/UX Designer' }

const newPessoa = JSON.stringify(minhaLista); // Converte um objeto para JSON.

console.log(newPessoa); // {"nome":"Ibercson","idade":37,"profissao":"Programador","skills":["PHP","JavaScript","Python"],"cargo":"UI/UX Designer"}

console.log(typeof newPessoa); // string