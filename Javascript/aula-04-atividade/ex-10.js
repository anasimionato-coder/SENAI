const aluno = {
  nome: "molina",
  idade: 15,
  endereco: {
    rua: "rua Sao sebastiao",
    numero: 450,
    cidade: "palhoca"
  }
};

console.log(`O aluno mora na ${aluno.endereco.rua}, ${aluno.endereco.numero} em ${aluno.endereco.cidade}.`);