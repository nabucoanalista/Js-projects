// 1 - Movendo-se pelo DOM

console.log("1 - Movendo-se pelo DOM");

// É possível navegar pelo DOM de várias formas. A mais comum é utilizando as propriedades de um elemento.

console.log(document.body); // Retorna todo o conteúdo do body

console.log(document.body.childNodes); // Retorna todos os nós filhos do body

console.log(document.body.childNodes[1]); // Retorna o segundo nó filho do body

console.log(document.body.childNodes[1].childNodes[0]); // Retorna o primeiro nó filho do segundo nó filho do body

console.log(document.body.childNodes[1].childNodes[1].nodeName); // Retorna o nome do segundo nó filho do body

// Existem outras formas de navegar por elemento. A diferença entre eles é a forma de seleção, que pode ser por: id, classe, tag, seletores CSS, etc. Exemplo: document.getElementById('id'), document.getElementsByClassName('classe'), document.getElementsByTagName('tag'), document.querySelector('seletor'), document.querySelectorAll('seletor').

// Exemplo de seleção por tag:

// 2 - Selecionando por tag

// Com o método getElementsByTagName, é possível selecionar todos os elementos de uma tag específica. O retorno é um HTMLCollection, que é parecido com um array, mas não é um array. Ele possui propriedades e métodos diferentes de um array.

console.log("2 - Selecionando por tag");

const listItens = document.getElementsByTagName('li'); // Retorna todos os elementos li... teos de uilizar a primeira letra maiúscula.

console.log(listItens); // Retorna todos os elementos li

// Como não é uma seleção específica, ele seleciona todos os elementos li da página. Se houver mais de um elemento li, ele retornará todos eles. então devemos utilizar o índice para selecionar um elemento específico.

// 3 - Selecionando por id

console.log("3 - Selecionando por id");

// Com o método getElementById, selecionamos um elemento específico por id, pois o id é único na página. Usamos como argumento uma string com o nome do id.

const title = document.getElementById("title"); // Retorna o elemento com o id title

console.log(title); // Retorna o elemento com o id title

// explicação: o método getElementById retorna um elemento específico, que é o elemento com o id title. Se não houver um elemento com o id especificado, ele retornará null.

// 4 - Selecionando por classe

console.log("4 - Selecionando por classe");

// O método getElementsByClassName seleciona todos os elementos com a classe especificada. O retorno é um HTMLCollection, que é parecido com um array, mas não é um array. Ele possui propriedades e métodos diferentes de um array.

const products = document.getElementsByClassName("product"); // Retorna todos os elementos com a classe product

console.log(products); // Retorna todos os elementos com a classe product

// Explicação: o método getElementsByClassName retorna todos os elementos com a classe product. Se não houver um elemento com a classe especificada, ele retornará um HTMLCollection vazio.

// 5 - Encontrando elementos por css

console.log("5 - Encontrando elementos por css");

// Com o método querySelectorAll, é possível selecionar todos os elementos que correspondem a um seletor CSS específico. O retorno é um NodeList, que é parecido com um array, mas não é um array. Ele possui propriedades e métodos diferentes de um array. Já o método querySelector retorna o primeiro elemento que corresponde a um seletor CSS específico.

const productsQuery = document.querySelectorAll(".product"); // Retorna todos os elementos com a classe product em um NodeList. Ps: Em JavaScript, quando usamos o método document.querySelectorAll(), podemos passar um seletor CSS como argumento. No CSS, um ponto antes de um nome indica uma classe, então ".product" seleciona todos os elementos que têm a classe "product".

console.log(productsQuery); // Retorna todos os elementos com a classe product

const mainContainer = document.querySelector("#main-container"); // Retorna o primeiro elemento com o id main-container

console.log(mainContainer); // Retorna o primeiro elemento com o id main-container

// Explicação: o método querySelectorAll retorna todos os elementos com a classe product em um NodeList. Se não houver um elemento com a classe especificada, ele retornará um NodeList vazio. já o método querySelector retorna o primeiro elemento com o id main-container. Se não houver um elemento com o id especificado, ele retornará null.

// 6 - Alterando o HTML

console.log("6 - Alterando o HTML");

// É possível alterar o HTML de um elemento de várias formas. Alguns métodos são: insertBefore, appendChild, replaceChild.

// 6.1 - insertBefore

console.log("6.1 - insertBefore");

// O método insertBefore insere um novo elemento antes de um elemento existente. Ele recebe dois argumentos: o novo elemento e o elemento existente... É necessário criar um elemento com js, isso pode ser feito com o método createElement.

const p = document.createElement("p"); // Cria um novo elemento p

console.log(p); // Retorna o novo elemento p

const header = title.parentElement; // Retorna o elemento pai do elemento com o id title

console.log(header); // Retorna o elemento pai do elemento com o id title

header.insertBefore(p, title); // Vai inserir o novo elemento p antes do elemento com o id title diretamente no elemento pai.

// Explicação: o método createElement cria um novo elemento p. O método parentElement retorna o elemento pai do elemento com o id title. O método insertBefore insere o novo elemento p antes do elemento com o id title diretamente no elemento pai.

// 6.2 - appendChild

console.log("6.2 - appendChild");

// O método appendChild insere um novo elemento no final de um elemento existente. Ele recebe um argumento: o novo elemento. Este elemento será inserido no final do elemento existente.

const navLinks = document.querySelector("nav ul"); // Retorna  o primeiro elemento ul dentro do elemento nav

const li = document.createElement("li"); // Cria um novo elemento li

navLinks.appendChild(li); // Vai inserir o novo elemento li no final do elemento ul

// Explicação: o método querySelector retorna o primeiro elemento ul dentro do elemento nav. O método createElement cria um novo elemento li. O método appendChild insere o novo elemento li no final do elemento ul.

// 6.3 - replaceChild

console.log("6.3 - replaceChild");

// O método replaceChild substitui um elemento existente por um novo elemento. Ele recebe dois argumentos: o novo elemento e o elemento existente.

const h2 = document.createElement("h2"); // Cria um novo elemento h2

h2.textContent = "Novo título"; // Adiciona um texto ao novo elemento h2

header.replaceChild(h2, title); // Vai substituir o elemento com o id title pelo novo elemento h2 diretamente no elemento pai.

// Explicação: o método createElement cria um novo elemento h2. O método textContent adiciona um texto ao novo elemento h2. O método replaceChild substitui o elemento com o id title pelo novo elemento h2 diretamente no elemento pai.

// 6.4 - createTextNode

console.log("6.4 - createTextNode");

// O método createTextNode cria um novo nó de texto. Ele recebe um argumento: o texto do nó.

const myText = document.createTextNode("Olá, mundo!"); // Cria um novo nó de texto com o texto "Olá, mundo!"

console.log(myText); // Retorna o novo nó de texto com o texto "Olá, mundo!"

const h3 = document.createElement("h3"); // Cria um novo elemento h3.

h3.appendChild(myText); // Vai inserir o novo nó de texto no final do novo elemento h3.

console.log(h3); // Retorna o novo elemento h3 com o novo nó de texto no final.

mainContainer.appendChild(h3); // Vai inserir o novo elemento h3 no final do elemento com o id main-container.

// Explicação: o método createTextNode cria um novo nó de texto com o texto "Olá, mundo!". O método createElement cria um novo elemento h3. O método appendChild insere o novo nó de texto no final do novo elemento h3. O método appendChild insere o novo elemento h3 no final do elemento com o id main-container.

// 7 - Trabalhando com atributos

console.log("7 - Trabalhando com atributos");

// É possível trabalhar com atributos de um elemento de várias formas. Alguns métodos são: getAttribute, setAttribute, removeAttribute.

const firstLink = navLinks.querySelector("a"); // Retorna o primeiro elemento a dentro do elemento com o id nav.

console.log(firstLink); // Retorna o primeiro elemento a dentro do elemento com o id nav.

firstLink.setAttribute("href", "https://www.google.com"); // Vai adicionar o atributo href com o valor "https://www.google.com" ao primeiro elemento a dentro do elemento com o id nav.

console.log(firstLink.getAttribute("href")); // Retorna o valor do atributo href do primeiro elemento a dentro do elemento com o id nav.

firstLink.setAttribute("target", "_blank"); // Vai adicionar o atributo target com o valor "_blank" ao primeiro elemento a dentro do elemento com o id nav.

// Explicação: o método querySelector retorna o primeiro elemento a dentro do elemento com o id nav. O método setAttribute adiciona o atributo href com o valor "https://www.google.com" ao primeiro elemento a dentro do elemento com o id nav. O método getAttribute retorna o valor do atributo href do primeiro elemento a dentro do elemento com o id nav. O método setAttribute adiciona o atributo target com o valor "_blank" ao primeiro elemento a dentro do elemento com o id nav.

// 8 - Altura e largura dos elementos

console.log("8 - Altura e largura dos elementos");

// É possível obter a altura e a largura de um elemento de várias formas. Alguns métodos são: offsetHeight, offsetWidth. Para desconsiderar as bordas, temos: clientHeight, clientWidth. Para desconsiderar as bordas e o padding, temos: scrollHeight, scrollWidth.

const footer = document.querySelector("footer"); // Retorna o primeiro elemento footer.

console.log(footer.offsetWidth); // Retorna a largura do elemento footer.
console.log(footer.offsetHeight); // Retorna a altura do elemento footer.

console.log(footer.clientWidth); // Retorna a largura do elemento footer desconsiderando as bordas.
console.log(footer.clientHeight); // Retorna a altura do elemento footer desconsiderando as bordas.

// Explicação: o método querySelector retorna o primeiro elemento footer. O método offsetWidth retorna a largura do elemento footer. O método offsetHeight retorna a altura do elemento footer. O método clientWidth retorna a largura do elemento footer desconsiderando as bordas. O método clientHeight retorna a altura do elemento footer desconsiderando as bordas.

// 9 - Posição do elemento

console.log("9 - Posição do elemento");

// Com o método getClientBoundingRect podemos pegar várias informações sobre a posição de um elemento. O retorno é um objeto com várias propriedades... Como: posição no eixo x e y, largura, altura, etc.

const product1 = products[0]; // Retorna o primeiro elemento com a classe product.

console.log(product1.getBoundingClientRect()); // Retorna um objeto com várias informações sobre a posição do elemento.

// Explicação: o método getBoundingClientRect retorna um objeto com várias informações sobre a posição do elemento. Se o elemento estiver visível, ele retornará a posição do elemento em relação à janela. Se o elemento não estiver visível, ele retornará a posição do elemento em relação ao documento.

// 10 - Estilos com JS

console.log("10 - Estilos com JS");

// Todos os elementos possuem um objeto style, A partir dela conseguimos alterar o CSS. Ps: Regras CSS que possuem hífen, devem ser escritas em camelCase. Exemplo: background-color -> backgroundColor.

mainContainer.style.color = "red"; // Vai alterar a cor do texto do elemento com o id main-container para vermelho.
mainContainer.style.backgroundColor = "#333"; // Vai alterar a cor de fundo do elemento com o id main-container para cinza escuro.
mainContainer.style.paddingBottom = "15px"; // Vai alterar o padding inferior do elemento com o id main-container para 15px.

// Explicação: o objeto style do elemento com o id main-container é um objeto que contém todas as propriedades CSS do elemento. O método style.color altera a cor do texto do elemento com o id main-container para vermelho. O método style.backgroundColor altera a cor de fundo do elemento com o id main-container para cinza escuro. O método style.paddingBottom altera o padding inferior do elemento com o id main-container para 15px.

// 11 - HTNLCollections

console.log("11 - HTNLCollections");

// HTMLCollection aparece quando selecionamos elementos de uma vez; Podemos passar por cada uns dos elementos com um for of, e etilizar individualmente cada item.

for (const li of listItens) {
    li.style.backgroundColor = "purple"; // Vai alterar a cor de fundo de cada elemento li para roxo.
}

// Explicação: o HTMLCollection é um objeto que contém todos os elementos de uma tag específica. O for...of passa por cada um dos elementos do HTMLCollection. O método style.backgroundColor altera a cor de fundo de cada elemento li para roxo.