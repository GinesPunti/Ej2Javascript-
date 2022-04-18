const pizza=[{

    nombre: "Cuatro Quesos",
    id:"123",
    ingredientes: "Roquefort, Muzzarela, Parmesano, Gouda ",
    precio: 800,

},{
    nombre: "Especial",
    id:"124",
    ingredientes: "Muzzarela, Jamon, Morron, Aceitunas",
    precio: 850,

},{
    nombre: "Napolitana",
    id:"125",
    ingredientes: "Muzzarela, Jamon, Tomate, Aceitunas",
    precio: 900,

},{
    nombre: "Fugazza",
    id:"126",
    ingredientes: "Cebolla, Parmesano, Aceite de Oliva",
    precio: 1000,
},{
    nombre: "Hawaiana",
    id:"127",
    ingredientes: "Jamon, Anana, Queso",
    precio: 900,
},{
    nombre: "Pollo",
    id:"128",
    ingredientes: "Pollo, Queso, Champiñones",
    precio: 500,
}
]
                                    //a
const idImar= pizza.filter(pizza=>pizza.id%2!=0).map(pizza=>pizza.nombre + " ")

console.log(`Pizzas con ID impar: ${idImar}`)
    
const pricePizza= pizza.filter(pizza=>pizza.precio<600).map(pizza=>pizza.nombre)

console.log(`Las pizzas con precio menor a $600 son: ${pricePizza}`)

const nombrePizza=pizza.map(pizza=>pizza.nombre +" ")

console.log(`Los nombres de las pizzas son: ${nombrePizza}`)

const precioPizza=pizza.map(pizza=>pizza.precio)

console.log(`Los precios son: ${precioPizza}`)

const namePrice=pizza.map(pizza=>pizza.nombre + " "+ pizza.precio)

console.log(`Los nombres de las pizzas y sus precios son: ${namePrice} `)
