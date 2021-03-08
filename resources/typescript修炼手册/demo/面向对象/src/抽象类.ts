(function () {
  /**
   * 以abstract开头的类是抽象类
   * 抽象类和其它类的区别不大，只是不能用来创建对象
   * 抽象类就是用来被继承的类
   * 抽象类中可以定义抽象方法
   * 
   */
  abstract class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    /**
     * 使用abstract定义抽象方法，没有方法体
     * 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
     */
    abstract getAge()
  }

  class Girl extends Person {
    getAge() {
      console.log(this.age)
    }
  }

  class Boy extends Person {
    getAge() {
      console.log(this.age)
    }
  }
  const girl = new Girl('妮妮', 12);
  const boy = new Boy('晶晶', 11);
})()