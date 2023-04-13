// Variáveis 

let resultado = document.getElementById("resp-inp");
let fatoriar = document.getElementById("resp-btn");
let basediv = 100;
let s = 0;
let i = 0;

// Função para interpretar o fatorial.

function fatorizar(num) {
    if (num < 0) {
        return -1;
    } else if (num <= 1) {
        return 1;
    } else {
        return num * fatorizar(num -1);
    }
}

// Loop 'for' para realizar o fatorial para no máximo 15 casas.

for (i = 0; i < 15; i++) {
    s += basediv / fatorizar(i);
    basediv -= 2;
    console.log(`${i + 1} - O resultado entre: (${basediv}/${fatorizar(i)})  ${basediv / fatorizar(i)}`);
}

console.log(`Soma dos 15 primeiros termos: ${s}`);

// Função para aplicar os dados e realizar a equação junto a condição de divisão.

function botao() {

    let num1 = 5
    let num2 = 3

    resultado1 = num1 / num2;
    // resultado.textContent = `${fatorizar(5)}`;
    resultado.textContent = `${Math.floor(s)}, aproximadamente.`
    console.log(Math.floor(s));
}
