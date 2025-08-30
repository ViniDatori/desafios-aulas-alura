function fatorializacao(numero) {

	let numAnt = numero - 1;
	let fatorial = numero * (numAnt);
	numAnt--;

	while(numAnt != 1) {
		fatorial = fatorial * (numAnt);
		numAnt--;
	}

	return fatorial;

}

fatorializacao(4);