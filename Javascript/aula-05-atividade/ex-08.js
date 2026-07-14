let valorCompra = 250;
let valorFinal;

if (valorCompra > 500) {
  valorFinal = valorCompra * 0.8;
} else if (valorCompra > 200) {
  valorFinal = valorCompra * 0.9;
} else if (valorCompra > 100) {
  valorFinal = valorCompra * 0.95;
} else {
  valorFinal = valorCompra;
}

console.log("Valor final: R$ " + valorFinal);