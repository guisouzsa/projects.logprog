function contar() {
    const numero = parseInt(document.getElementById('numero').value);
    let k = '';

    if (!isNaN(numero) && numero >= 0) { // Verifica se o número é válido
        for (let i = 1; i <= numero; i++) {
           k = (i*(1+i))/2;
        }
    } else {
        k = 'Por favor, insira um número válido.'; // Mensagem de erro
    }

    document.getElementById('resultado').textContent = k;
}
