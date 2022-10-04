// enhanced object literals (enhanced = mejora)

function newUser(user, age, country, uid) {
  return {
    user,
    age,
    country,
    id: uid
  }
}
console.log(newUser('tomasotano25', 26, 'RD', 1))
