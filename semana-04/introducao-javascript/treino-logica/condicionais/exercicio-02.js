/* Construa um algoritmo para determinar se o indivíduo esta com um peso favorável.
Essa situação é determinada através do IMC (Índice de Massa Corpórea), que é definida como sendo a relação entre o peso (PESO) e o quadrado da Altura (ALTURA) do indivíduo. */

var altura = 2
var peso = 80
var imc = peso / (altura ^ 2)
console.log(imc)

imc < 20 ? console.log('Abaixo do peso')
    : imc >= 20 && imc < 25 ? console.log('Peso normal')
        : imc >= 25 && imc < 30 ? console.log('Sobre peso')
            : imc >= 30 && imc < 40 ? console.log('Obeso')
                : imc >= 40 ? console.log('Obesidade móbida')
                    : undefined
