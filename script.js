/*Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!*/

let numberOne = Number(prompt('Olá! Vamos realizar alguns cálculos? Digite o primeiro número desejado:'))
let numberTwo = Number(prompt('Agora vamos ao segundo número:'))

let soma = numberOne + numberTwo
alert(`O resultado da soma dos dois números é: ${soma}`)

let sub = numberOne - numberTwo
alert(`O resultado da subtração dos dois números é: ${sub}`)

let mult = numberOne * numberTwo
alert(`O resultado da multiplicaçãdo dos dois números é: ${mult}`)

let div = numberOne / numberTwo
alert(`O resultado da divisão dos dois números é: ${div}`)

let resto = numberOne % numberTwo
alert(`O resto da divisão dos dois números é: ${resto}`)


if(soma % 2 == 0) {
  alert('O resultado da soma dos dois números é um número par.')
} else {
  alert('O resultado da soma dos dois números é um número ímpar.')
}

if(numberOne === numberTwo) {
  alert('Os dois números inseridos são iguais')
} else {
  alert('Os dois números inseridos são diferentes.')
}