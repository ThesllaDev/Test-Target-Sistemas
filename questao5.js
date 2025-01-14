/*
QUESTAO 5:
5) Escreva um programa que inverta os caracteres de um string. 

IMPORTANTE: 
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function inverterString(str) {
    let resultado = '';
    // Loop para percorrer a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i]; // Adiciona o caractere à variável resultado
    }
    return resultado;
}

let minhaString = "Exemplo de string"; // Aqui você pode alterar a string
let stringInvertida = inverterString(minhaString);

console.log("String original: " + minhaString);
console.log("String invertida: " + stringInvertida);