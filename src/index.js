//Carculadora de partidas Rankeadas

var saldoVitorias = calculoRankeada(200, 30);
var seuNivel = 0;

console.log("\nCalculando o partidas Ranqueadas!\n\n");

function calculoRankeada(vitorias, derrotas) {
  let taxaDeVitorias = vitorias - derrotas;
  return taxaDeVitorias;
}

if (saldoVitorias <= 10) {
  seuNivel = "Ferro";
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
  seuNivel = "Bronze";
} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
  seuNivel = "Prata";
} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
  seuNivel = "Ouro";
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
  seuNivel = "Diamante";
} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
  seuNivel = "Lendário";
} else {
  seuNivel = "Imortal";
}

console.log(`O herói tem salde de ${saldoVitorias} está no nível ${seuNivel}!\n\n`)
