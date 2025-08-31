// 1.	Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

// 2.	Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// 3.	Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push("Java", "Ruby", "GoLang");

// 4.	Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let lista1 = ["Vinícius", "Aline", "Gustavo"];
lista1[0];

// 5.	Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let lista2 = ["Nilceia", "Everaldo", "Arthur"];
lista2[1];

// 6.	Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let lista3 = ["Dejanir", "Léia", "Mariane"];
lista3[2];

// 7.   Remova um item da lista linguagensDeProgramacao.
linguagensDeProgramacao.pop("GoLang");

// 8.   Retorne na tela quantos itens a lista3 possui.
lista3.length;

// 9.   Exiba na tela o último item da lista linguagensDeProgramacao.
linguagensDeProgramacao[linguagensDeProgramacao.length - 1];

// 10.  Verifique se um item específico está incluso ou não na lista2.
lista2.includes("Vinícius");