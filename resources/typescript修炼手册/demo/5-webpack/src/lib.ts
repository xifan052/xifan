function calc(a: number, b: number): number {
  return a + b
}

function asyncCalc(type: string) {
  new Promise((resolve, reject) => {
    if (type) {
      resolve(type)
    } else {
      reject("error")
    }
  })
}

export {
  calc,
  asyncCalc
}