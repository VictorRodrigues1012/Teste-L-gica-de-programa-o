// Variáveis

let resultado = document.getElementById("resp-inp"); 
let inserirDados = document.getElementById("dado-inp"); 
let vetorDados = ["9", "7", "2", "16", "14"]; 


inserirDados.addEventListener("keydown", function (event) {
    if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        return;
    }

    if (event.key < '0' || event.key > '9') {
        event.preventDefault();
    }
}); /* Este evento fica responsável por permitir caracteres especificos,
sendo assim só é possível inserir números de 0 à 9, navegar pelas setas do teclado, apagar pelo backspace e delete.*/


//Funções

function Pesquisar() {
    let valor = vetorDados.indexOf(inserirDados.value);

    if (valor == -1) {
        resultado.innerHTML = "Valor não encontrado!";
        console.log("Valor não encontrado!");
    } else {
        resultado.innerHTML = `Valor encontrado! Posição ${valor}°.`;
        console.log("Valor encontrado! Posição " + valor + "°.");
    }
    inserirDados.value = "";
}; /* Função responsável por pesquisar o elemento dentro do vetor. */
