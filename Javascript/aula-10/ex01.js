function buscaLinear(array, alvo) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === alvo) {
      return i; // retorna o índice do elemento
    }
  }
  return -1; // não encontrado
}

// Exemplo de uso
let numeros = [5, 12, 7, 3, 9];
console.log(buscaLinear(numeros, 7)); // 2 (índice do 7)
console.log(buscaLinear(numeros, 15)); // -1 (não existe