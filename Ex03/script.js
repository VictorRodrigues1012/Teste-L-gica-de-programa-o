// Função para aplicar a condição de um vetor de no máximo 30 casas.

function gerar() {
  // Variáveis

  let vetor1 = document.getElementById("vetor1-inp").value.split(",").map(Number); 
  let vetor2 = document.getElementById("vetor2-inp").value.split(",").map(Number);
  // Split serve para separar cada dado utilizando (,), e map(Number) para transformar os dados em valor inteiro.
  
  let resposta = document.getElementById("result-inp");
  let vetorInt = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
  let intercalado = [];

  for (let i = 0; i < vetorInt.length; i++) {
    if (i < vetorInt) {
      console.log("erro.")
    } else {
      intercalado.push(vetor1[i]);
      intercalado.push(vetor2[i]);
    }
  }
  resposta.innerHTML = "Vetor intercalado: <br>[" + intercalado + "]";
}