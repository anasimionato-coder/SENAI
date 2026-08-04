let contatos =[
    {id: 1, nome: "Molina"},
    {id: 2, nome: "yngrid"}
]

let encontrado = contatos.find(function(item){
return item.id === 2    
})

console.log(encontrado)