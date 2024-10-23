function sortear() {
    let quantidade = parseInt(document.getElementById ('quantidade').value)
    let doNumero = parseInt(document.getElementById ('de').value)
    let ateNumero = parseInt(document.getElementById ('ate').value)
    let total = ateNumero - doNumero
    let numerosSorteados = []
    let numero 

    if (doNumero >= ateNumero) {
        alert('Erro: Insira um número menor que corresponda ao campo "Até o número"')
        return
    }
    if (quantidade >= total) {
        alert('Erro: Insira um número no campo "QUANTIDADE" que seja menor ou igual a diferença entre os números a serem sorteados')
        return
    }

    for (let i = 0; i < quantidade; i++) {
        numero = obrterNumeroAleatorio(doNumero, ateNumero);

        while (numerosSorteados.includes(numero)) {
            numero = obrterNumeroAleatorio(doNumero, ateNumero)
        }
        numerosSorteados.push(numero)
    }
    

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`

    
    
    alterarStatusBotao()
}

function obrterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar")
    
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado")
        botao.classList.add("container__botao")
    } else {
        botao.classList.remove("container__botao")
        botao.classList.add("container__botao-desabilitado")
    }
}
function reiniciar() {
    document.getElementById ('quantidade').value = ''
    document.getElementById ('de').value = ''
    document.getElementById ('ate').value = ''
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao()
}