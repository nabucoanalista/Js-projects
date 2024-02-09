// Eventos são ações que o usuário realiza no navegador, como clicar em um botão, passar o mouse sobre um elemento, digitar algo em um campo de formulário, etc. Podemos inserir lógica quando esses eventos ocorrem, como validar um formulário, exibir um menu, etc. essa lógica é chamada de "event handler" ou "event listener".

// 1 - Adicionando eventos

console.log('1 - Adicionando eventos');

// Podemos adicionar eventos diretamente no HTML, mas é mais comum adicionar eventos via JavaScript. Para isso, utilizamos o método addEventListener().

const btn = document.querySelector("#my-button"); // seleciona o botão

btn.addEventListener("click", function() { // adiciona um evento de clique
    console.log("Clicou no botão"); // exibe uma mensagem no console
});

// Explicação: o método addEventListener() recebe dois argumentos: o nome do evento (sem o prefixo "on") e uma função que será executada quando o evento ocorrer. No exemplo acima, a função exibe uma mensagem no console quando o botão é clicado.

// 2 - Removendo eventos

console.log('2 - Removendo eventos');

// Também é possível remover eventos com o método removeEventListener(). Para isso, é necessário passar a mesma função que foi adicionada com addEventListener().

const btn2 = document.querySelector("#my-button2"); // seleciona o botão

function imprimirMensagem() { // cria uma função
    console.log("Tem evento"); // exibe uma mensagem no console
};

btn2.addEventListener("click", imprimirMensagem); // adiciona um evento de clique

const thirdbtn = document.querySelector("#my-button3"); // seleciona o botão

thirdbtn.addEventListener("click", () => { // adiciona um evento de clique
    console.log("Removendo evento"); // exibe uma mensagem no console
    btn2.removeEventListener("click", imprimirMensagem); // remove o evento de clique
});

// Explicação: no exemplo acima, a função imprimirMensagem() é adicionada como um evento de clique no botão btn2. Quando o botão thirdbtn é clicado, a função é removida do botão btn2 e não será mais executada quando o botão for clicado.

// 3 - O objeto event

console.log('3 - O objeto event');

// Todo evento possui um argumento especial, que contém informações do mesmo. Geralmente, esse argumento é chamado de event ou e. Esse objeto possui diversas propriedades e métodos que nos permitem manipular o evento.

const myTitle = document.querySelector("#my-title"); // seleciona o título

myTitle.addEventListener("click", (event) => { // adiciona um evento de clique
    console.log(event); // exibe o objeto event no console
    //console.log(event.srcElement); // exibe o elemento que disparou o evento porem srcElement é obsoleto utilizar target
    console.log(event.offsetX); // exibe a posição do cursor no eixo X
    console.log(event.pointerType); // exibe o tipo de dispositivo de entrada    
    console.log(event.target); // exibe o elemento que disparou o evento
});

// Explicação: no exemplo acima, o objeto event é exibido no console quando o título é clicado. O objeto possui diversas propriedades e métodos que nos permitem manipular o evento. No exemplo, exibimos a posição do cursor no eixo X, o tipo de dispositivo de entrada e o elemento que disparou o evento.

// 4 - propagação

console.log('4 - propagação');

// Quando um evento ocorre em um elemento, ele é propagado para os elementos pais. Isso é chamado de propagação de eventos. Por padrão, a propagação ocorre de dentro para fora, ou seja, do elemento que disparou o evento para os elementos pais. No entanto, é possível alterar esse comportamento com o método stopPropagation().

const containerBtn = document.querySelector("#btn-container"); // seleciona o container
const btnInsideContainer = document.querySelector("#div-btn"); // seleciona o botão dentro do container

containerBtn.addEventListener("click", () => { // adiciona um evento de clique no container
    console.log("Evento 1"); // exibe uma mensagem no console
});

btnInsideContainer.addEventListener("click", (e) => { // adiciona um evento de clique no botão
    e.stopPropagation(); // interrompe a propagação do evento, pois sem esse comando quando clicar no botão o evento do container também será disparado.
    console.log("Evento 2"); // exibe uma mensagem no console
});

// Explicação: no exemplo acima, o evento de clique no botão btnInsideContainer não será propagado para o containerBtn, pois a propagação é interrompida com o método stopPropagation().

// 5 - Ação padrão "Default"

console.log('5 - Ação padrão "Default"');

// Alguns eventos possuem uma ação padrão, como clicar em um link, enviar um formulário, etc. É possível interromper essa ação padrão com o método preventDefault().

const a = document.querySelector("a"); // seleciona o link

a.addEventListener("click", (e) => { // adiciona um evento de clique no link
    e.preventDefault(); // interrompe a ação padrão

    console.log("Não alterou a página"); // exibe uma mensagem no console
});

// Explicação: no exemplo acima, a ação padrão de clicar no link é interrompida com o método preventDefault(). Portanto, o link não alterará a página e quando clicar no link a mensagem será exibida no console.

// 6 - Eventos de teclado

console.log('6 - Eventos de teclado');

// Além do evento de clique, existem eventos de teclado, como pressionar uma tecla, soltar uma tecla, etc. Esses eventos são muito úteis para criar formulários, jogos, etc, temos por exemplo os eventos keydown, keyup e keypress.

document.addEventListener("keyup", (e) => { // adiciona um evento de teclado
    console.log(`Soltou a tecla ${e.key}`); // exibe a tecla solta no console ps: ele nao exibe caso  tecla ficar pressionada.
});

document.addEventListener("keydown", (e) => { // adiciona um evento de teclado
    console.log(`Pressionou a tecla ${e.key}`); // exibe a tecla pressionada no console ps: ele exibe caso  tecla ficar pressionada.
});

// Explicação: no exemplo acima, o evento de soltar e pressionar uma tecla é exibido no console. O objeto event possui a propriedade key, que contém a tecla pressionada.

// 7 - Eventos de mouse

console.log('7 - Eventos de mouse');

// Além do evento de clique, existem eventos de mouse, como passar o mouse sobre um elemento, mover o mouse, etc. Esses eventos são muito úteis para criar menus, galerias de imagens, etc, temos por exemplo os eventos mousedown, mouseup, dblclick, etre outros.

const mouseEvents = document.querySelector("#mouse"); // seleciona o elemento

mouseEvents.addEventListener("mousedown", () => { // adiciona um evento de clique
    console.log("Pressionou o botão"); // exibe uma mensagem no console
});

mouseEvents.addEventListener("mouseup", () => { // adiciona um evento de clique
    console.log("Soltou o botão"); // exibe uma mensagem no console
});

mouseEvents.addEventListener("dblclick", () => { // adiciona um evento de clique
    console.log("Clique duplo"); // exibe uma mensagem no console
});

// Explicação: no exemplo acima, os eventos de pressionar o botão, soltar o botão e clique duplo são exibidos no console. Esses eventos são muito úteis para criar galerias de imagens, menus, etc.

// 8 - Movimento do mouse

console.log('8 - Movimento do mouse');

// Além dos eventos de clique, existem eventos de movimento do mouse, como passar o mouse sobre um elemento, mover o mouse, etc. Esses eventos são muito úteis para criar menus, galerias de imagens, etc, temos por exemplo os eventos mouseover, mousemove, mouseout, etre outros.

document.addEventListener("mousemove", (e) => { // adiciona um evento de movimento do mouse
    //console.log(`No eixo X: ${e.x}`); // exibe a posição do cursor no eixo X
    //console.log(`No eixo Y: ${e.y}`); // exibe a posição do cursor no eixo Y
});

// Explicação: no exemplo acima, a posição do cursor no eixo X e Y é exibida no console quando o mouse é movido. Esses eventos são muito úteis para criar menus, galerias de imagens, etc.

// 9 - Eventos por scroll

console.log('9 - Eventos por scroll');

// Além dos eventos de clique, existem eventos de scroll, como rolar a página, etc. Esses eventos são muito úteis para criar menus, galerias de imagens, etc, temos por exemplo os eventos scroll.

window.addEventListener("scroll", (e) => { // adiciona um evento de scroll
    if (window.pageYOffset > 200) { // verifica se a página foi rolada mais de 200 pixels
        console.log("Rolou mais de 200 pixels"); // exibe uma mensagem no console
    } // ps: note que usei window e não document isso porque o evento scroll é do window e não do document
});

// Explicação: no exemplo acima, a mensagem é exibida no console quando a página é rolada mais de 200 pixels. Esse evento é muito útil para criar menus, galerias de imagens, etc.

// 10 - Evento por foco

console.log('10 - Evento por foco');

// Além dos eventos de clique, existem eventos de foco, como focar em um campo de formulário, etc. Esses eventos são muito úteis para criar formulários, validações, etc, temos por exemplo os eventos focus e blur. O focus ocorre quando um elemento recebe o foco, e o blur ocorre quando um elemento perde o foco.

const input = document.querySelector("#my-input"); // seleciona o campo de formulário

input.addEventListener("focus", (e) => { // adiciona um evento de foco
    console.log("Focou no campo"); // exibe uma mensagem no console
});

input.addEventListener("blur", (e) => { // adiciona um evento de foco
    console.log("Desfocou do campo"); // exibe uma mensagem no console
});

// Explicação: no exemplo acima, a mensagem é exibida no console quando o campo de formulário recebe e perde o foco. Esses eventos são muito úteis para criar formulários, validações, etc.

// 11 - Eventos de carregamento da página

console.log('11 - Eventos de carregamento da página');

// Além dos eventos de clique, existem eventos de carregamento da página, como carregar a página, etc. Esses eventos são muito úteis para criar animações, carregar conteúdo, etc, temos por exemplo os eventos load e beforeunload. O load ocorre quando a página é carregada, e o beforeunload ocorre antes da página ser descarregada.

window.addEventListener("load", () => { // adiciona um evento de carregamento da página
    console.log("Página carregada"); // exibe uma mensagem no console
});

/*window.addEventListener("beforeunload", (e) => { // adiciona um evento de carregamento da página
    //e.preventDefault(); // interrompe a ação padrão
    //e.returnValue = ""; // define a mensagem de confirmação
});*/

// Explicação: no exemplo acima, a mensagem é exibida no console quando a página é carregada. Esse evento é muito útil para criar animações, carregar conteúdo, etc... porem hoje em dia não utilizamos muito o evento beforeunload, pois ele é muito invasivo e pode ser bloqueado pelo navegador.

// 12 - Técnica de debounce

console.log('12 - Técnica de debounce');

// A técnica de debounce é muito útil para evitar que um evento seja disparado muitas vezes seguidas, como ao digitar algo em um campo de formulário, mover o mouse, etc. Essa técnica é muito útil para criar formulários, menus, etc.

const debounce = (f, delay) => { // cria uma função debounce que recebe outra função e um atraso
    let timeout; // cria uma variável para armazenar o timeout

    return (...arguments) => { // retorna uma função que recebe qualquer número de argumentos
        if (timeout) { // verifica se o timeout existe
            clearTimeout(timeout); // limpa o timeout
        } // Assim, a função debounce pode ser utilizada para evitar que um evento seja disparado muitas vezes seguidas.

        timeout = setTimeout(() => { // define um novo timeout
            f.apply(arguments); // executa a função com os argumentos
        }, delay); // define o atraso
    };
};

// nesse primeiro exemplo o movimento do mouse é exibido no console muitas vezes seguidas

/*window.addEventListener("mousemove", () => { // adiciona um evento de movimento do mouse
    console.log("Movendo o mouse"); // exibe uma mensagem no console
});*/ 

// nesse segundo exemplo o movimento do mouse é exibido no console apenas uma vez a cada 500 milissegundos e por conta do timeout ele só exibe a ultima posição do mouse quando parar de mover o mouse.

window.addEventListener(
    "mousemove",
    debounce(() => {
        console.log("Executando a cada 500ms");
    }, 500)
); 

// Explicação: no exemplo acima, a função debounce é utilizada para evitar que o evento de movimento do mouse seja disparado de forma excessiva. Assim, a função debounce pode ser utilizada para evitar que um evento seja disparado muitas vezes seguidas, posso utilizar essa função em formulários, menus, etc.





















