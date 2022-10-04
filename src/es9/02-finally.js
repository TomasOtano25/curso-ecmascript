// promises (algo que va pasar)

const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!!')
    }
    else {
      reject('Whoooooops!')
    }
  })
}

anotherFunction()
  .then((response) => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finally'))
