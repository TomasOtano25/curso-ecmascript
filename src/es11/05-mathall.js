const regex = /\b(Apple)+\b/g

const fruit = 'Apple, Banane, Kiwi, Apple, Orange, etc. etc.'

for (const match of fruit.matchAll(regex)) {
  console.log(match)
}