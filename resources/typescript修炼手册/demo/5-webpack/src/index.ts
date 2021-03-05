import { calc } from './lib'

function sum(a: number, b: number): number {
  return a + b
}
console.log(calc(99, 1))

console.log(sum(9, 8))

const obj = { name: 'monkey' }

const fn = (a: number, b: number): number => a + b;

console.log(fn(1, 2))