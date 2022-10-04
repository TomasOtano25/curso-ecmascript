const regex = /(\d{4})-(\d{2})-(\d{2})/ // manejo de fechas (YYYY-MM-DD)

const matchers = regex.exec('2022-01-01')

console.table(matchers)
console.table(matchers[0])
