
function newUser(name, age, country) {
  var name = name || 'Tomas'
  var age = age || 23
  var country = country || 'RD'

  console.log(name, age, country)
}

newUser()
newUser('Sebastian', 15, 'CO')

function newAdmin(name = 'Tomas', age = 23, country = 'RD') {
  console.log(name, age, country)
}

newAdmin()
newAdmin('Ana', 28, 'PE')