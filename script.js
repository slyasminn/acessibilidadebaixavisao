let tamanhoFonte = 18;

function alterarFonte(valor) {
    tamanhoFonte += valor;

    if (tamanhoFonte < 12) {
        tamanhoFonte = 12;
    }

    if (tamanhoFonte > 36) {
        tamanhoFonte = 36;
    }

    document.body.style.fontSize = tamanhoFonte + "px";
}

function resetarFonte() {
    tamanhoFonte = 18;
    document.body.style.fontSize = tamanhoFonte + "px";
}
