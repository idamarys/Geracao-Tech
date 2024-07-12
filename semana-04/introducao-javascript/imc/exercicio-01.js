// var peso = parseFloat(prompt('Qual é o teu peso em kg?'))
// var altura = parseFloat(prompt('Qual é a tua altura?'))

var peso = parseFloat(document.getElementById('peso').value);
var altura = parseFloat(document.getElementById('altura').value);
var imc = peso / (altura ^ 2)
console.log(imc)
var resultado = ''

imc < 18.5 ? resultado = 'tá desnutrido!'
    : imc >= 18.5 && imc <= 24.9 ? resultado = 'tá saudável!'
        : imc >= 25 && imc <= 29.9 ? resultado = 'tá com sobrepeso!'
            : imc >= 30 && imc <= 34.9 ? resultado = 'tá levemente obeso!'
                : imc >= 35 && imc <= 39.9 ? resultado = 'tá moderadamente obeso!'
                    : imc >= 40 ? resultado = 'tá morbidamente obseso!' : resultado = 'deu certo não, ein'

document.getElementById('resultado').innerHTML = `Seu IMC é ${imc.toFixed(2)} - ${resultado}`