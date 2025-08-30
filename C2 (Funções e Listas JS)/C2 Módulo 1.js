// 1.	Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.

// 2.	Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

// 3.	Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function mensagemConsole() {
    console.log("O botão foi clicado.");
}

// 4.	Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function mensagemAlerta() {
    alert("Eu amo JavaScript! <3");
}

// 5.	Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function mensagemCidade() {
    let cidade = prompt("Diga o nome de uma cidade brasileira.");
    alert(`Estive em ${cidade} e lembrei de você!`);
}

// 6.	Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function soma() {
    let num1 = prompt("Digite um número inteiro.");
    let num2 = prompt("Digite outro número inteiro.");
    let resultado = parseInt(num1) + parseInt(num2);
    alert(`A soma de ${num1} e ${num2} é igual a ${resultado}.`);
}