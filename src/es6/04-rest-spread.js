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