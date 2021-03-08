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
    var Person1 = /** @class */ (function () {
        function Person1(name, age) {
            this.name = name;
            this.age = age;
        }
        Person1.prototype.getAge = function () {
            console.log(this.age);
        };
        return Person1;
    }());
    var Girl = /** @class */ (function (_super) {
        __extends(Girl, _super);
        // super代表父类
        function Girl(name, age) {
            return _super.call(this, '妮妮', 12) || this;
        }
        Girl.prototype.run = function () {
            _super.prototype.getAge.call(this);
        };
        return Girl;
    }(Person1));
    var Boy = /** @class */ (function (_super) {
        __extends(Boy, _super);
        function Boy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Boy;
    }(Person1));
    var girl = new Girl('妮妮', 12);
    var boy = new Boy('晶晶', 11);
    girl.run();
})();
