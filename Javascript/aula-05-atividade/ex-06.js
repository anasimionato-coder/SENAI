let idade = 15;

if (idade <= 12) {
  console.log("Criança");
} else if (idade <= 17) {
  console.log("Adolescente");
} else if (idade <= 64) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

idade = 10;
console.log(idade <= 12 ? "Criança" : idade <= 17 ? "Adolescente" : idade <= 64 ? "Adulto" : "Idoso");

idade = 20;
console.log(idade <= 12 ? "Criança" : idade <= 17 ? "Adolescente" : idade <= 64 ? "Adulto" : "Idoso");

idade = 70;
console.log(idade <= 12 ? "Criança" : idade <= 17 ? "Adolescente" : idade <= 64 ? "Adulto" : "Idoso");