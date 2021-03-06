(() => {
  class Person {

    constructor() {

    }
    /**
     * 直接定义的属性是实例属性，需要通过对象的实例去访问
     * 使用static开头的属性是静态属性(类属性)，可以直接通过类名去访问
     * 使用readonly开头的属性表示一个只读的属性，无法修改
     */
    name: string = 'monkey' // 定义示例属性
    static age: number = 10 // 定义类属性(静态属性)
    readonly address: string = 'china'

    static say() {
      console.log('hello')
    }
  }

  const per = new Person()
  Person.age = 12
  // per.address = 19 // error 无法分配到 "address" ，因为它是只读属性。
  console.log(Person.age)
  console.log(per.name)
  Person.say()
})()