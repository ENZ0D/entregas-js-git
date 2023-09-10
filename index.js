const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// CONSIGNAS (CON SU RESOLUCIÓN) DE LA ENTREGA:
// a)  Las pizzas que tengan un id impar.
console.log(`*** RESOLUCIÓN ITEM A ***`);
const pizzaImpar = (pizzasArray) => {
  pizzasArray.forEach((pizza) => {
    if (pizza.id % 2 !== 0){
      return console.log(`La ${pizza.nombre} tiene el ID IMPAR`)
    }
  });
}
pizzaImpar(pizzas)

// b) Responder: ¿Hay alguna pizza que valga menos de $600?
console.log(`*** RESOLUCIÓN ITEM B ***`);
const pizzaInferior600 = (pizzasArray) => {
  let condicion = pizzasArray.findIndex(pizza => pizza.precio < 600)
  console.log(`La ${pizzasArray[condicion].nombre} tiene un precio a $600, y este es: $ ${pizzasArray[condicion].precio}`)
}
pizzaInferior600(pizzas)

// c) El nombre de cada pizza con su respectivo precio.
console.log(`*** RESOLUCIÓN ITEM C ***`);
//revisar runjs para los testeos que no funcaron

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta 
// recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una
// propiedad "ingredientes" cuyo valor es un array con ingredientes.
console.log(`*** RESOLUCIÓN ITEM D ***`);
const ingredientes = (pizzasArray) => {
  pizzasArray.forEach(pizza => {
    console.log(`Los ingredientes de la ${pizza.nombre} son: ${pizza.ingredientes.join(', ')}.`)
  })
}
ingredientes(pizzas)

