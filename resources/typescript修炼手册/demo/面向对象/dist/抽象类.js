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
(function () {
    /**
     * 以abstract开头的类是抽象类
     * 抽象类和其它类的区别不大，只是不能用来创建对象
     * 抽象类就是用来被继承的类
     * 抽象类中可以定义抽象方法
     *
     */
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        return Person;
    }());
    var Girl = /** @class */ (function (_super) {
        __extends(Girl, _super);
        function Girl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Girl.prototype.getAge = function () {
            console.log(this.age);
        };
        return Girl;
    }(Person));
    var Boy = /** @class */ (function (_super) {
        __extends(Boy, _super);
        function Boy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boy.prototype.getAge = function () {
            console.log(this.age);
        };
        return Boy;
    }(Person));
    var girl = new Girl('妮妮', 12);
    var boy = new Boy('晶晶', 11);
})();
