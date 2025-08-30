// 1.	Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador1 = 0;
while(contador1 != 10) {
    contador1++;
    console.log(contador1);
}

// 2.	Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador2 = 10;
while(contador2 != 0) {
    contador2--;
    console.log(contador2);
}

// 3.	Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contador3 = prompt("Digite um número qualquer.");
while(contador3 != 0) {
    contador3--;
    console.log(contador3);
}

// 4.	Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contador4 = prompt("Digite um número qualquer.");
let zero = 0;
while(zero != contador4) {
    zero++;
    console.log(zero);
}
