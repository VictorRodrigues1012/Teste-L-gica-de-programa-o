// Declaração de variáveis 

const inputH = document.getElementById("dado-inp"); // Valor do dado no input 
const respostaAreaTotal = document.getElementById("resp-inp"); 

// Funções

function calcular() {

    const valorH = inputH.value;
    const aresta = 29;

    console.log(`Altura: ${valorH} e Aresta: ${aresta}`); // Valor da altura da área

    const apotema = aresta / 2; // Fórmula para descobrir o valor da apotema

    console.log(`Valor de apótema: ${apotema}`); // Valor da apotema

    const alturaFace = Math.sqrt((valorH ** 2) + (apotema ** 2)); // Fórmula para descobrir a altura da face

    console.log(`Altura da face da apotema: ${alturaFace.toFixed(2)}`); // Valor da altura da face da apotema

    const areaFace = aresta * alturaFace / 2; // Fórmula para descobrir a área da face

    console.log(`A área da face: ${areaFace.toFixed(2)}`); // Valor da área da face

    const areaTotal = areaFace * 4; // Fórmula para descobrir a área total das 4 faces

    respostaAreaTotal.innerHTML = `A área total das 4 faces laterais: ${areaTotal.toFixed(2)} cm².`; // Valor da área total das faces
} 