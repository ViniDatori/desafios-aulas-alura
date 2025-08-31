// 1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt("Que dia é hoje?");
if(diaSemana == "Sábado" || "Domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

// 2.	Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt("Digite um número qualquer.");
if(numero > 0) {
    alert(`${numero} é positivo.`);
} else {
    alert(`${numero} é negativo.`);
}

// 3.	Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = parseInt(Math.random() * 300 + 1);
if(pontuacao >= 100) {
    alert("Parabéns! Você ganhou.");
} else {
    alert("Que pena! Você perdeu.");
}

// 4.	Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 4000;
alert(`Seu saldo atual é de R$ ${saldo}.`)

// 5.	Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUsuario = prompt("Qual é o seu nome?");
alert(`Seja bem-vindo, ${nomeUsuario}!`);