let numero_salvo = parseInt(0);
let operacao = '';
let segundo_numero = false;

window.addEventListener('keydown', function(e) {
    const tecla = e.key;
    if (!isNaN(tecla) && tecla >= 0 && tecla <= 9) {
        AdicionarNum(tecla)
    }
})

function AdicionarNum(num) {
    const input = document.getElementById('input');
    if (segundo_numero == true) {
        document.getElementById('input').textContent = '';
        input.textContent += num;
        segundo_numero = false;
    }
    else {
        input.textContent += num;
    }
}

function Limpar() {
    document.getElementById('input').textContent = '';
}

function Operacao(op) {
    numero_salvo = parseInt(document.getElementById('input').textContent);
    operacao = op;
    segundo_numero = true;
}

function Calcular() {

    const input = document.getElementById('input');
    const atual = parseInt(input.textContent);
    let resultado = 0;

    if (operacao == "soma") {
        resultado = numero_salvo + atual;
    }
    else if (operacao == "sub") {
        resultado = numero_salvo - atual;
    }
    else if (operacao == "div") {
        resultado = numero_salvo / atual;
    }
    else if (operacao == "mult") {
        resultado = numero_salvo * atual;
    }
    input.textContent = String(resultado);
    numero_salvo = 0;
    operacao = '';
    segundo_numero = false;
    }
