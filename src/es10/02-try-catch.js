try {
  hello()
} catch (error) {
  console.error(error.message);
}

try {
  anotherFn()
} catch {
  console.log('Esto es un error')
}