// 1 - Métodos.

console.log("1 - Métodos.");

// Métodos são funções que estão dentro de um objeto, eles são como propriedades, mas contém uma função.

const animal = {
    raca: "Labrador",
    cor: "Preto",
    latir: function() { // Método.
        console.log("Au Au");
    },
};

console.log(animal.raca, animal.cor);

animal.latir(); // Chamando o método.

// 2 - This.

console.log("2 - This.");

// This é uma palavra reservada que faz referência ao objeto que está sendo executado naquele momento.

const pessoa = {
    nome: "Ibercson",

    getNome: function() { // Método.
        return this.nome; // Referência ao objeto pessoa.
    },

    setNome: function(novoNome) { 
        this.nome = novoNome; // Alterando o valor da propriedade nome.
    },
};

console.log(pessoa.nome); // Chamando a propriedade nome.

console.log(pessoa.getNome());  // Chamando o método getNome.

pessoa.setNome("Beto"); // Chamando o método setNome.

console.log(pessoa.getNome()); // Chamando o método getNome.

// 3 - Prototypes.

console.log("3 - Prototypes.");

// é um recurso do JavaScript, uma espécie de herança, que permite que um objeto herde propriedades e métodos de outro objetos como: string, number, array, etc. O recurso fundamental do prototype é o fallback, que permite que um objeto acesse propriedades e métodos de outro objeto.

const text = "Ibercson"; // String.

console.log(Object.getPrototypeOf(text)); // Acessando o prototype do objeto text.

const bool = true; // Boolean.

console.log(Object.getPrototypeOf(bool)); // Acessando o prototype do objeto bool.

const arr = []; // Array.

console.log(Object.getPrototypeOf(arr)); // Acessando o prototype do objeto arr.

// Tambem podemos acessar o prototype de um objeto criado por nós.

const animal2 = {
    a: "Cachorro",
};

console.log(Object.getPrototypeOf(animal2)); // Acessando o prototype do objeto animal2.

console.log(Object.getPrototypeOf(animal2) === Object.prototype); // Verificando se o prototype do objeto animal2 é igual ao prototype do objeto Object.

const animal3 = Object.create(animal2); // Criando um objeto animal3 que herda as propriedades e métodos do objeto animal2.

console.log(animal3); // Acessando o objeto animal3.

console.log(animal3.a); // Acessando a propriedade a do objeto animal3.

console.log(Object.getPrototypeOf(animal3) === animal2); // Verificando se o prototype do objeto animal3 é igual ao objeto animal2.

// 4 - Classes básicas.

console.log("4 - Classes básicas.");

// Classes são modelos para a criação de objetos, elas são como um molde, onde podemos definir propriedades e métodos que os objetos criados a partir delas terão, também podemos criar classes que herdam propriedades e métodos de outras classes.

const Cachorro = {
    raca: null,
    patas: 4,
};

const labrador = Object.create(Cachorro); // Criando um objeto labrador que herda as propriedades e métodos do objeto Cachorro.

labrador.raca = "Labrador"; // Definindo a propriedade raca do objeto labrador.

console.log(labrador); // Acessando o objeto labrador.

console.log(labrador.patas); // Acessando a propriedade patas do objeto labrador.

const pug = Object.create(Cachorro); // Criando um objeto pug que herda as propriedades e métodos do objeto Cachorro.

pug.raca = "Pug"; // Definindo a propriedade raca do objeto pug.

console.log(pug); // Acessando o objeto pug.

// 5 - Classes com construtor.

console.log("5 - Classes com construtor.");

// Utilizando funções construtoras podemos criar classes que recebem parâmetros para definir o valor inicial de suas propriedades.

function criarCachorro(nome, raca) {
    const cachorro = Object.create({}); // Criando um objeto cachorro que herda as propriedades e métodos do objeto Object.

    cachorro.nome = nome; // Definindo a propriedade nome do objeto cachorro.

    cachorro.raca = raca; // Definindo a propriedade raca do objeto cachorro.

    return cachorro; // Retornando o objeto cachorro.
};

const Totó = criarCachorro("Totó", "Labrador"); // Criando um objeto Totó.

console.log(Totó); // Acessando o objeto Totó.

const Rex = criarCachorro("Rex", "Pug"); // Criando um objeto Rex.

console.log(Rex); // Acessando o objeto Rex.

console.log(Object.getPrototypeOf(Totó)); // Acessando o prototype do objeto Totó.

// 6 - Classes basiadas em funções.

console.log("6 - Classes basiadas em funções.");

// Podemos criar classes utilizando funções construtoras, mas também podemos criar classes utilizando funções normais. Utilizaremos a palavra reservada new para criar objetos a partir de uma função.

function Cachorro2(nome, raca) { // ps: Por convenção, as classes são iniciadas com letra maiúscula.
    this.nome = nome; // Definindo a propriedade nome do objeto cachorro.
    this.raca = raca; // Definindo a propriedade raca do objeto cachorro.
};

const pudle = new Cachorro2("bolinha", "Pudle"); // Criando um objeto pudle.

console.log(pudle); // Acessando o objeto pudle.
    
// 7 - Métodos na função construtora.

console.log("7 - Métodos na função construtora.");

// Podemos criar métodos dentro de uma função construtora, para isso basta definir uma propriedade e atribuir uma função a ela.

Cachorro2.prototype.latir = function() { // Criando um método latir para a função construtora Cachorro2.
    console.log("Au Au");
};

console.log(Cachorro2.prototype); // Acessando o prototype da função construtora Cachorro2

pudle.latir(); // Chamando o método latir do objeto pudle.

// 8 - Classes ES6.

console.log("8 - Classes ES6.");

// A partir do ES6 podemos criar classes utilizando a palavra reservada class. Podemos usar o construtor para definir as propriedades do objeto e podemos criar métodos dentro da classe.

class Cachorro3 {
    constructor(nome, raca) { // Método construtor.
        this.nome = nome; // Definindo a propriedade nome do objeto cachorro.
        this.raca = raca; // Definindo a propriedade raca do objeto cachorro.
    };
};

const jupi = new Cachorro3("Jupi", "Vira-lata"); // Criando um objeto jupi.

console.log(jupi); // Acessando o objeto jupi.

console.log(Object.getPrototypeOf(jupi)); // Acessando o prototype do objeto jupi.

// 9 - Mais sobre classes ES6.

console.log("9 - Mais sobre classes ES6.");

// Não podemos adicionar propriedades diretamente na classe, para isso devemos adicionar as propriedades no prototype da classe. Os métodos da classe também podem utilizar a palavra reservada this para acessar as propriedades do objeto.

class carro {
    constructor(marca, modelo, eixos) {
        this.marca = marca;
        this.modelo = modelo;
        this.eixos = eixos;
    };

    descreverCarro() {
        console.log(`Caminhão de marca ${this.marca}, modelo ${this.modelo} e com ${this.eixos} eixos.`); // Utilizando a palavra reservada this para acessar as propriedades do objeto.
    };
};

const scania = new carro("Scania", "R440", 6); // Criando um objeto scania.

console.log(scania); // Acessando o objeto scania.

scania.descreverCarro(); // Chamando o método descreverCarro do objeto scania.

carro.motor = "V8"; // Adicionando a propriedade motor na classe carro, porém ela não será adicionada no objeto scania pois está fora da classe.

const volvo = new carro("Volvo", "FH", 6); // Criando um objeto volvo.

console.log(volvo); // Acessando o objeto volvo.

console.log(volvo.motor); // Acessando a propriedade motor do objeto volvo.

carro.prototype.motor = "V8"; // Adicionando a propriedade motor no prototype da classe carro, assim ela será adicionada no objeto scania.

const mercedes = new carro("Mercedes", "Actros", 6); // Criando um objeto mercedes.

console.log(mercedes); // Acessando o objeto mercedes.

// 10 - Override.

console.log("10 - Override.");

// As instâncias dos objetos criados a partir de uma classe podem sobrescrever os métodos da classe ou seja, as propriedades tem valores definidos no construtor ou por métodos da classe, mas podem ser alterados nas instâncias dos objetos.

class humano {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    };
};

const iber = new humano("Ibercson", "Alves", 38); // Criando um objeto iber.

console.log(iber); // Acessando o objeto iber.

console.log(iber.sexo); // Vai dar undefined pois a propriedade sexo não foi definida no construtor nem por métodos da classe.

humano.prototype.sexo = "Masculino"; // Adicionando a propriedade sexo no prototype da classe humano.

console.log(iber.sexo); // Agoa vai retornar Masculino pois a propriedade sexo foi adicionada no prototype da classe humano.

console.log(humano.prototype.sexo); // Acessando a propriedade sexo do prototype da classe humano.

// 11 - Simbolos em classes.

console.log("11 - Simbolos em classes.");

// Podemos adicionar propriedades com o tipo Symbol em classes, para isso devemos criar uma constante com o tipo Symbol e adicionar ela como propriedade da classe.

class moto {
    constructor(marca, modelo, cilindrada) {
        this.marca = marca;
        this.modelo = modelo;
        this.cilindrada = cilindrada;
    };
};

const honda = Symbol(); // Criando uma constante honda com o tipo Symbol.

moto.prototype[honda] = "CBR 1000RR"; // Adicionando a constante honda como propriedade da classe moto.

const yamaha = new moto("Yamaha", "YZF-R1", "998 cc"); // Criando um objeto yamaha.

console.log(yamaha); // Acessando o objeto yamaha.

console.log(yamaha[honda]); // Acessando a propriedade honda do objeto yamaha.

// 12 - Getters e Setters.

console.log("12 - Getters e Setters.");

// Podemos criar métodos especiais para acessar e alterar propriedades de um objeto, esses métodos são chamados de getters e setters.
//getters: São métodos que retornam o valor de uma propriedade.
//setters: São métodos que alteram o valor de uma propriedade.

class post {
    constructor(titulo, autor, views, tags) {
        this.titulo = titulo;
        this.autor = autor;
        this.views = views;
        this.tags = tags;
    };

    get exibirAutor() { // Método getter.
        return `Escrito por ${this.autor}.`;
    }

    set adicionarTags(tags) { // Método setter. Aqui será adicionado a propriedade tags no objeto post. as adições sao feitas como array e no projeto final será transformado em string.
        const tagsArray = tags.split(", "); // Transformando a string tags em um array. lembrando que o separador é a virgula e o espaço.
        this.tags = tagsArray; // Definindo a propriedade tags do objeto post.
    }
}

const post1 = new post("Aprendendo JavaScript", "Ibercson", 1000); // Nao colocamos a propriedade tags pois ela será adicionada pelo método setter. porem ele vaj exibir undefined.

console.log(post1); // Acessando o objeto post1.

console.log(post1.exibirAutor); // Chamando o método getter exibirAutor do objeto post1.

post1.adicionarTags = "JavaScript, Programação, Front-end"; // Chamando o método setter adicionarTags do objeto post1.

console.log(post1); // Acessando o objeto post1.

// 13 - Herança.

console.log("13 - Herança.");

// Podemos criar classes que herdam propriedades e métodos de outras classes, para isso devemos utilizar a palavra reservada extends para criar a classe filha e a palavra reservada super para acessar o construtor da classe pai.

class animal4 {
    constructor(raca) {
        this.raca = raca;
    };
};

class cachorro4 extends animal4 { // Criando a classe cachorro4 que herda as propriedades e métodos da classe animal4.
    constructor(raca, patas) {
        super(raca); // Chamando o construtor da classe pai.
        this.patas = patas;
    };
};

const labrador2 = new cachorro4("Labrador", 4); // Criando um objeto labrador2.

console.log(labrador2); // Acessando o objeto labrador2.

// 14 - Operador instanceof.

console.log("14 - Operador instanceof.");

// Assim como o operador typeof, o operador instanceof retorna o tipo de um objeto, porém ele verifica se um objeto foi criado a partir de uma classe.

console.log(labrador2 instanceof cachorro4); // Verificando se o objeto labrador2 foi criado a partir da classe cachorro4.

console.log(labrador2 instanceof carro); // Verificando se o objeto labrador2 foi criado a partir da classe carro.

console.log(new cachorro4("Pug", 4) instanceof cachorro4); // Verificando se o objeto criado a partir da classe cachorro4 foi criado a partir da classe cachorro4.

console.log(new post("a", "b") instanceof carro); // Verificando se o objeto criado a partir da classe post foi criado a partir da classe carro.