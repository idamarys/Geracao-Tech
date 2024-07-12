/* Escreva um algoritmo que leia um número e informe se ele é divisível por 10, por 5 ou por 2 ou se não é divisível por nenhum deles. */

var numero = 10

numero % 10 == 0 ? console.log('É divisível por 10')
    : numero % 5 == 0 ? console.log('É divisível por 5')
        : numero % 2 == 0 ? console.log('É divisivel por 2')
            : console.log('Não é divisível por nenhum deles')