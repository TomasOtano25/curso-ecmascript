// metodos privados

// #<fnName> {}
// # es el caracter para determinar metodos privados

class user {
  // Constructor
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  // metodos
  #speak() {
    return 'Hello'
  }
  greeting() {
    return `${this.speak()} ${this.name}`
  }

  get #uAge() {
    return this.age
  }

  set #uAge(value) {
    this.age = value
  }

}

const developer2 = new user('Tomas', 22)
console.log(developer2.uAge)
console.log(developer2.uAge = 20)
