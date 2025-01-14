/*
QUESTÃO 3:
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

NOTA IMPORTANTE: Estou utilizando um ambiente Node.js e o pacote "fs" para leitura do arquivo JSON. Para executar o código, é necessário ter o Node.js instalado na máquina. Para instalar o pacote "fs", basta rodar o comando "npm install fs" no terminal com o node instalado. E para executar o código, basta rodar o comando "node questao3.js" no terminal com o node instalado.
*/

const fs = require("fs");

function menorFaturamento(faturamento) {
  return Math.min(
    ...faturamento.filter((item) => item.valor > 0).map((item) => item.valor)
  );
}

function maiorFaturamento(faturamento) {
  return Math.max(
    ...faturamento.filter((item) => item.valor > 0).map((item) => item.valor)
  );
}

function mediaMensal(faturamento) {
  const diasComFaturamento = faturamento.filter((item) => item.valor > 0);
  const totalFaturamento = diasComFaturamento.reduce(
    (acc, item) => acc + item.valor,
    0
  );
  return totalFaturamento / diasComFaturamento.length;
}

function diasAcimaDaMedia(faturamento, media) {
  return faturamento.filter((item) => item.valor > media).length;
}

fs.readFile("faturamento.json", "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  const faturamento = JSON.parse(data);

  const menorValor = menorFaturamento(faturamento);
  const maiorValor = maiorFaturamento(faturamento);
  const media = mediaMensal(faturamento);
  const diasAcimaDaMediaResult = diasAcimaDaMedia(faturamento, media);

  console.log("Menor valor de faturamento:", menorValor);
  console.log("Maior valor de faturamento:", maiorValor);
  console.log(
    "Número de dias com faturamento superior à média:",
    diasAcimaDaMediaResult
  );
});
