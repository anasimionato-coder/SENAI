let produto =[
    {id: 1, nome: "fone", preco:59, categoria :"eletronico"},
    {id: 2, nome: "geladeira", preco:2.599, categoria :"eletro"},
    {id: 3, nome: "mouse", preco:109, categoria :"informatica"},
    {id: 4, nome: "teclado", preco:299, categoria :"informatica"},
    {id: 5, nome: "fogão", preco:599, categoria :"eletro"},

]

let nomes=produto.map(function(item){
    return item.nome
})

console.log(nomes)

let eletro = produto.filter(function(item){
    return item.categoria ==="eletro"
})
console.log(eletro)

let encontrado = produto.find(function(item){
    return item.id === 3
})

console.log(encontrado)

let nomeMaiores = produto. filter(function(item){
    return item.preco < 500
})
.map(function(item){
    return item.nome
})
console.log(nomeMaiores)