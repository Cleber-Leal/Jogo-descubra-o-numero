function VerificarSeOk(chute) {
    const numero = +chute
    if (Isnumber(numero)) {
        elementoChute.innerHTML += '<div> Não é um número.</div>'
        return
    }
    if (NumeroOk(numero)) {
        elementoChute.innerHTML += `<div> Numero Inválido, escolher numero entre ${menorValor} e ${maiorValor}`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2> Você acertou! </h2>
        <h3 class="acertou"> ${numeroSecreto}<h3>
        <button id="botao" class="btn-jogar">Jogar</button>`



    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div> O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i> </div>`


    }else {
        elementoChute.innerHTML += `<div> O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i> </div>`
    }

}

function Isnumber(numero) {
    return Number.isNaN(numero);
}

function NumeroOk(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'botao'){
        window.location.reload()
    }
})