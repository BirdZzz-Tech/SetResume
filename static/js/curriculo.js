var etapaAtual = 1;

function mostrarEtapa(etapa) {
    document.getElementById("passo-1").style.display = "none";
    document.getElementById("passo-2").style.display = "none";
    document.getElementById("passo-3").style.display = "none";
    document.getElementById("passo-4").style.display = "none";
    document.getElementById("passo-5").style.display = "none";
    document.getElementById("passo-6").style.display = "none";
    document.getElementById("passo-7").style.display = "none";
    document.getElementById("passo-1").classList.remove("ativo");
    document.getElementById("passo-2").classList.remove("ativo");
    document.getElementById("passo-3").classList.remove("ativo");
    document.getElementById("passo-4").classList.remove("ativo");
    document.getElementById("passo-5").classList.remove("ativo");
    document.getElementById("passo-6").classList.remove("ativo");
    document.getElementById("passo-7").classList.remove("ativo");
    document.getElementById("passo-" + etapa).style.display = "block";
    document.getElementById("passo-" + etapa).classList.add("ativo");

    var abas = document.querySelectorAll(".aba-etapa");

    for (var i = 0; i < abas.length; i++) {
        abas[i].classList.remove("ativa");
        abas[i].classList.remove("concluida");
        var numero = Number(abas[i].dataset.step);
        if (numero == etapa) {
            abas[i].classList.add("ativa");
        }
        if (numero < etapa) {
            abas[i].classList.add("concluida");
        }
    }

    document.getElementById("preenchimento-progresso").style.width =
        ((etapa - 1) / 6) * 100 + "%";
    document.getElementById("indicador-etapa").innerText =
        "Etapa " + etapa + " de 7";
    if (etapa == 1) {
        document.getElementById("btn-voltar").style.display = "none";
    } else {
        document.getElementById("btn-voltar").style.display = "inline-flex";
    }

    if (etapa == 7) {
        document.getElementById("btn-avancar").innerHTML =
            '<i class="bi bi-check2-circle"></i> Concluir';
    } else {
        document.getElementById("btn-avancar").innerHTML =
            'Continuar <i class="bi bi-arrow-right"></i>';
    }
    etapaAtual = etapa;
}

function proximoPasso() {
    if (etapaAtual < 7) {
        etapaAtual++;
        mostrarEtapa(etapaAtual);
    } else {
        console.log("Finalizar currículo");
    }
}

function passoAnterior() {
    if (etapaAtual > 1) {
        etapaAtual--;
        mostrarEtapa(etapaAtual);
    }
}

var abas = document.querySelectorAll(".aba-etapa");

abas[0].onclick = function () {
    mostrarEtapa(1);
};
abas[1].onclick = function () {
    mostrarEtapa(2);
};
abas[2].onclick = function () {
    mostrarEtapa(3);
};
abas[3].onclick = function () {
    mostrarEtapa(4);
};
abas[4].onclick = function () {
    mostrarEtapa(5);
};
abas[5].onclick = function () {
    mostrarEtapa(6);
};
abas[6].onclick = function () {
    mostrarEtapa(7);
};
mostrarEtapa(1);