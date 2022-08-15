const foo = (params) => {
  params ??= 'hello world'

  console.log(params)

  bar()
}

const bar = () => {
  console.log('bar')
}

foo()

