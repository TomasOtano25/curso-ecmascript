// arrays destructuring

let fruits = ['Apple', 'Banana']
let [a, b] = fruits;

console.log(a, b)
console.log(a, fruits[1])

let fruits2 = ['Apple', 'Banana', 'Orange']
let [, , fruit] = fruits2
console.log(fruit)

// object destructuring

let user = { username: 'Tomas', age: 22 }
let { username, age } = user
console.log(username, user.age)

// spread operator (operador de propagacion)

let person = { username: 'Tomas', age: 22 }
let country = 'MX'

let data = { id: 1, ...person, country }
console.log(data)

// rest (rest parameters)

function sum(num, ...values) {
  console.log(values)
  console.log(num + values[0])
  return num + values[0];
}

sum(1, 1, 2, 3)

