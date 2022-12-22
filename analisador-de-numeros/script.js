let numeros = [];
let selectRes = document.getElementById('selectRes');
let res = document.querySelector('div#res');
let num = document.getElementById('numtxt');
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, numeros)) {
        numeros.push(Number(num.value));

        let itemOption = document.createElement('option');

        itemOption.text = `Valor ${num.value} adicionado`;

        selectRes.appendChild(itemOption);
        res.innerHTML = '';
    } else {
        alert('Valor inválido ou já encontrado na lista.');
    }

    num.value = '';
    num.focus();
}

function finalizar() {
    res.innerHTML = '';
    if (numeros.length == 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        let maior = numeros[0];
        let menor = numeros[0];
        let media = 0;
        let soma = 0;
        for (let i in numeros) {
            if (numeros[i] > maior) {
                maior = numeros[i];
            }
            if (numeros[i] <= menor) {
                menor = numeros[i];
            }
            soma += numeros[i];
        }
        media = soma / numeros.length;
        res.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados.`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(
            2
        )}. </p>`;
    }
}

// Funções de validação

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}
