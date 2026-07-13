const amigos = [
  { nome: "molina", idade: 15 },
  { nome: "yngrid", idade: 18 },
  { nome: "hannah", idade: 15 },
  { nome: "emy", idade: 15 }
];

const maiores = [];

amigos.forEach(amigo => {
  if (amigo.idade >= 18) {
    maiores.push(amigo);
  }
});

console.log(maiores);