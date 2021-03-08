(function () {
  class Person1 {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    getAge() {
      console.log(this.age)
    }
  }

  class Girl extends Person1 {
    // super代表父类
    constructor(name: string, age: number) {
      super('妮妮', 12)
    }
    run() {
      super.getAge()
    }
  }

  class Boy extends Person1 {

  }
  const girl = new Girl('妮妮', 12);
  const boy = new Boy('晶晶', 11);
  girl.run()
})()