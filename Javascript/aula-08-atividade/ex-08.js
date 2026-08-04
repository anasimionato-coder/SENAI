let palavras = ['sol', 'montanha', 'lua', 'estrela', 'mar']
let letras = palavras.filter(function(item){
    return item.length > 3
})

console.log(letras)