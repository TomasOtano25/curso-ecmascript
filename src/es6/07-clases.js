// declarando
class User { };
// instancia de una clase
const newUser = new User();

class user {
  // metodos
  greeting() {
    return 'Hello'
  }
}

const tomas = new user()
console.log(tomas.greeting())

const developer = new user()
console.log(developer.greeting())

// contructor

class user {
  // Constructor
  constructor() {
    console.log('Nuevo usuario')
  }

  greeting() {
    return 'Hello'
  }
}

const seba = new user()

// this
class user {
  // Constructor
  constructor(name) {
    this.name = name
  }

  // metodos
  speak() {
    return 'Hello'
  }
  gretting() {
    return `${this.speak()} ${this.name} `
  }
}

const matias = new user('Matias')
console.log(matias.gretting())


// getters and setters

class user {
  // Constructor
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  // metodos
  speak() {
    return 'Hello'
  }
  greeting() {
    return `${this.speak()} ${this.name}`
  }

  get uAge() {
    return this.age
  }

  set uAge(value) {
    this.age = value
  }

}

const developer2 = new user('Tomas', 22)
console.log(developer2.uAge)
console.log(developer2.uAge = 20)
