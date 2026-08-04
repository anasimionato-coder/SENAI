let numeros = [5, 12, 8, 21, 3, 15, 7]
let maior = numeros.filter(function(item){
    return item % 2 === 0
})

console.log(maior)