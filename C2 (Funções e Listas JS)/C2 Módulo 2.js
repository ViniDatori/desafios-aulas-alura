// 1.	Criar uma função que exibe "Olá, mundo!" no console.
function mensagemOla() {
    console.log("Olá, mundo!");
}

mensagemOla();

// 2.	Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function mensagemOlaPersonalizada(nome) {
    console.log(`Olá, ${nome}!`);
}

mensagemOlaPersonalizada("Vinícius");

// 3.	Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrarNum(numero) {
    return numero * 2;
}

dobrarNum(4);

// 4.	Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calculoMedia(num1, num2, num3) {
    let media = (num1 + num2 + num3)/3
    return media;
}

calculoMedia(7, 8, 9);

// 5.	Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNum(numero1, numero2) {
    if(numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

maiorNum(7, 9);

// 6.	Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicarNum(num) {
    return num * num;
}

multiplicarNum(7);