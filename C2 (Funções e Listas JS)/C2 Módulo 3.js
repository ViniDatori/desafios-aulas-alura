// 1.	Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularIMC(altura, peso) {
    return peso/(altura ** 2);
}

calcularIMC(1.78, 74);

// 2.	Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    let fatorial = numero * (numero - 1);
    numero--;
    console.log(fatorial);
    while(numero != 1) {
        fatorial = fatorial * (numero - 1);
        numero--;
        console.log(fatorial);
    }
}

calcularFatorial(4);

// 3.	Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function conversorDolarReal(USD) {
    return USD * 4.80;
}

conversorDolarReal(60);

// 4.	Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function medidasRet(base, altura2) {
    let area = base * altura2;
    let perimetro = 2 * (base + altura2);
    let resultado = `A área do retângulo é igual a ${area}m e o perímetro é igual a ${perimetro}m.`;
    return resultado;
}

medidasRet(10, 20);

// 5.	Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function medidasCirculo(raio) {
    let pi = 3.14;
    let areaC = pi * raio ** 2;
    let perimetroC = 2 * pi * raio;
    let resultadoC = `A área do círculo é igual a ${areaC}m e o perímetro é igual a ${perimetroC}m.`
    return resultadoC;
}

medidasCirculo(25);

// 6.	Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(num) {
    multiplicador = 1;
    while(multiplicador < 11) {
        let tab = num * multiplicador;
        multiplicador++;
        console.log(tab);
    }
}

tabuada(2);