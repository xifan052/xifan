var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        console.log("滴滴滴", name);
    }
    Person.prototype.getAge = function () {
        console.log(this.age);
    };
    return Person;
}());
var Girl = /** @class */ (function (_super) {
    __extends(Girl, _super);
    function Girl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Girl.prototype.run = function () {
        console.log(this.name);
    };
    return Girl;
}(Person));
var Boy = /** @class */ (function (_super) {
    __extends(Boy, _super);
    function Boy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Boy.prototype.run = function () {
        this.getAge();
        console.log(this.name);
    };
    // 如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法
    // 这种子类覆盖掉父类方法的形式称为方法的重写
    Boy.prototype.getAge = function () {
        console.log('年龄：' + this.age);
    };
    return Boy;
}(Person));
var girl = new Girl('妮妮', 12);
var boy = new Boy('晶晶', 11);
girl.run();
boy.run();
