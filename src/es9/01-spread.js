// spread with objects

const user = { username: 'tomasotano25', age: 22, country: 'RD' }
const { username, ...values } = user

console.log(username)
console.log(values)

