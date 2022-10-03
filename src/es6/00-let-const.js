// Declarado y asignado
var lastName = 'David'
// Reasignado
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple'
fruit = 'Kiwi'
console.log(fruit);

// No se puede reasignar
const animal = 'Dog'
// animal = 'Cat'
console.log(animal);

const fruits = () => {
  if (true) {
    var fruit1 = 'Apple' // global - function scope
    let fruit2 = 'Orange' // Block scope (solo disponible es este bloque)
    const fruit3 = 'Banana' // Block scope
  }

  console.log(fruit1)
  console.log(fruit2)
  console.log(fruit3)
}

fruits()



