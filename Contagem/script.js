function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let retorno = document.getElementById('retorno')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert ('[ERRO] Faltam dados.')
        retorno.innerHTML = 'Impossível contar!'
    } else {
        retorno.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
                retorno.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                retorno.innerHTML += `${c} \u{1F449}`
            }
        }
        retorno.innerHTML += `\u{1F3C1}`
    }
}