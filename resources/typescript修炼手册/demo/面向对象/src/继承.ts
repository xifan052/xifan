class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    console.log("滴滴滴", name)
  }
  getAge() {
    console.log(this.age)
  }
}

class Girl extends Person {

  run() {
    console.log(this.name)
  }
}

class Boy extends Person {
  run() {
    this.getAge()
    console.log(this.name)
  }
  // 如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法
  // 这种子类覆盖掉父类方法的形式称为方法的重写
  getAge() {
    console.log('年龄：' + this.age)
  }
}
const girl = new Girl('妮妮', 12);
const boy = new Boy('晶晶', 11);
girl.run()
boy.run()