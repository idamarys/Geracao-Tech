var nomeCompleto = ' allAn Arauj o'

function primeiroNome(nomeCompleto) {
    var variavelParaEncontrarEspaco = nomeCompleto.trim().indexOf(' ')
    var allanSemEspacoMinusculo = nomeCompleto.trim().toLowerCase()
    return allanSemEspacoMinusculo.charAt(0).toUpperCase() + allanSemEspacoMinusculo.substring(1, variavelParaEncontrarEspaco)
}

function segundoNome(nomeCompleto) {
    var araujo = nomeCompleto.trim().substring(6)
    return araujo.replaceAll(' ', '')
}
console.log(primeiroNome(nomeCompleto))
console.log(segundoNome(nomeCompleto))

nomeCompleto = primeiroNome(nomeCompleto) + segundoNome(nomeCompleto)
console.log(nomeCompleto)