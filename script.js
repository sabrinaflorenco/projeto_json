console.log("trabalhando string json")

const objetoJS = {
    nome:'sabrina',
    idade: 41,
    estrangeira: false
}
console.log(objetoJS)
console.log(typeof(objetoJS))

//false strinJson
const falseStringJson = {
    "nome": "sabrina",
    "idade": 41,
    "estrangeira":false
}
console.log(falseStringJson)
console.log(typeof(falseStringJson))

//modo correto de String json

const stringJSON = JSON.stringify(objetoJS)
console.log(stringJSON)
console.log(typeof(stringJSON))

const parsedJSON = JSON.parse(stringJSON)
console.log(parsedJSON)
console.log(typeof(parsedJSON))
console.log(parsedJSON.nome)

const produtoJS =    {
    "id": 3,
    "nome": "Fones de Ouvido Bluetooth",
    "marca": "AudioTech",
    "categoria": "Áudio",
    "preco": 79.99,
    "quantidadeEstoque": 100,
    "prontaEntrega": true
  }
  console.log(produtoJS)


