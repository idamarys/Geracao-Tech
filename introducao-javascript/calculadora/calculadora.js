var um = parseFloat(prompt('Digite um número: '))
var operação = prompt('Digite a operação desejada: ')
var dois = parseFloat(prompt('Digite outro número: '))
var resultado = null

operação == '+' ? resultado = um + dois
    : operação == '*' ? resultado = um * dois
        : operação == '-' ? resultado = um - dois
            : operação == '/' ? resultado = um / dois
                : resultado = 'operação inválida'

prompt(resultado.toFixed(2))