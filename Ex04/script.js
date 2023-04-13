// Variáveis

let sequencia = document.getElementById("seq-inp");
let resposta1 = document.getElementById("resp1-inp");
let resposta2 = document.getElementById("resp2-inp");
let input = document.getElementById("number-inp");
let numbers = [];
// Função que ao acionar o botão gerar e acionar o evento de restrição de certos botões e a função 'bubblesort'.

function gerar() {
    numbers = input.value.split(",").map(Number);
    // Eventos

    input.addEventListener("keydown", function (event) {
        if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            return;
        }

        if (event.key < '0' || event.key > '9') {
            event.preventDefault();
        }
    });
    console.log(`Ordenado: ${bubbleSort(numbers)}`);
    resposta1.innerHTML = `Vetor Ordenado: ${bubbleSort(numbers)}.`;
    resposta2.innerHTML = `Vetor com Ordem reversa: ${numbers.reverse()}.`;
    input.value = "";
}


// Função para condicionar se um elemento a esquerda é maior que o próximo da lista, assim trocando de posição.

function bubbleSort(numbers) {

    let len = numbers.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    return numbers;
}
