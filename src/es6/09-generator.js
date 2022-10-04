// generadores = son funciones que retornan segun el algoritmo definido

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Tomas', 'Sebastian', 'Matias', 'Ana', 'Ulises'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value) // undefined
console.log(it.next().value) // undefined