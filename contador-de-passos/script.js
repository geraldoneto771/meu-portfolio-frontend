function contar() {
    let inicio = document.getElementById('inicio').value;
    let fim = document.getElementById('fim').value;
    let passo = document.getElementById('passo').value;

    let resultado = document.getElementById('resultado');

    if (inicio == '') {
        alert('[ERRO] - Entre com um valor de Inicio');
        resultado.innerHTML = 'Inpossível contar<br>';
        return 0;
    } else {
        inicio = Number(inicio);
    }
    if (fim == '' || fim <= 0) {
        alert('[ERRO] - Entre com um valor de Fim');
        resultado.innerHTML = 'Inpossível contar<br>';
        return 0;
    } else {
        fim = Number(fim);
    }
    if (passo == '') {
        alert('[ERRO] - Entre com um valor de Passo');
        resultado.innerHTML = 'Inpossível contar<br>';
        return 0;
    } else {
        passo = Number(passo);
        resultado.innerHTML = 'contando:<br>';
        if (passo <= 0) {
            alert('PASSO igual a Zero, Considerando PASSO 1');
            passo = 1;
        }
        if (fim > inicio) {
            // Contagem crescente
            for (inicio; inicio <= fim; inicio += passo) {
                resultado.innerHTML += `${inicio} \u{1F449}`;
            }
        } else {
            // Contagem regressiva
            for (inicio; inicio >= fim; inicio -= passo) {
                resultado.innerHTML += `${inicio} \u{1F449}`;
            }
        }
        resultado.innerHTML += '&#x1F3F4';
    }
}
