"use strict";
// 1. 布尔类型
var flag = true;
// 2. 数字类型
var num = 233;
// 3. 字符串类型
var str1 = '字符串';
// 4. 数组类型
// 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组
var arr = ['字符串'];
// 第二种定义数组的方式是使用数组泛型，Array<元素类型>：
var arr1 = [1, 2, 3];
// 5. 元组类型
// 就是固定长度的数组,对应下标的数据类型只能是声明的数据类型
var tupleArr = [1, 'hello'];
// 6. 枚举
// enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
var Status;
(function (Status) {
    Status[Status["success"] = 0] = "success";
    Status[Status["err"] = 1] = "err";
})(Status || (Status = {}));
var res = Status.success;
// console.log(res); // 0
// 7. Any
// 当没有指定类型时，会默认any, 应用于一个场景无法明确数据类型，或者单个数据类型没办法满足的情况
var str = 123;
str = true;
// 8. unknown
// 是一个类型安全的any，
var s;
// s = str // any类型的变量可以赋值给任意变量类型；
var unknownStr;
unknownStr = 12;
// s = unknownStr // unknown类型的变量不能直接赋值给其它类型变量
// 9. Void
// 表示没有返回值;以函数为例，如果没有声明函数返回类型时，函数会根据return值的数据类型来识别函数返回变量类型
// let unusable = undefined;
function func1() {
    return;
}
// 10. Null 和 Undefined
// 默认情况下null和undefined是所有类型的子类型
var num1;
// 11.Never
// 表示的是那些永不存在的值的类型，例如代码运行报错，或者死循环。
function infiniteLoop() {
    throw new Error('error');
}
// 12.Object
var obj = { a: 1, b: 2 };
// 1. 也可以像类型别名一样声明变量类型
// {} 用来指定对象中可以包含哪些属性
// 语法:{属性名:属性值,属性名:属性值}
var obj1;
obj1 = { name: 'monkey', age: 5 };
// 当不能确定对象属性个数时，以上的方式就不能满足实现
var obj2;
obj2 = { name: 'Baboon', 1: 'female', 2: 1 };
// [propName: string]: any 表示任意类型的属性 
// propName 名字可以随便定义，: string表示指定属性名的数据类型,: any 表示指定值的数据类型是any
// 2. 限制函数结构(有几个参数，返回值是什么类型)
var obj3;
obj3 = function (num1, num2) {
    return num1 + num2;
};
// 字面量
// 限制变量的值就是该字面量的值,一般用于指定变量值的范围
var b;
b = 'cat'; // ok
b = 'fish'; // ok
var peopleArr = [{ name: 'Tom', age: 23, sex: 'men' }];
// 类型断言
// 用来告诉编译器变量的实际类型
// 防止在不确定传参类型的时候，就访问其中一个类型特有的属性或方法
function func(val) {
    // 如果val的数据类型是数字，是不包含length属性的
    //   if (val.length) {
    //     return val.length
    //   } else {
    //     return val.toString().length
    //   }
    // 两种使用方式
    // 1. 使用变量as类型（推荐）
    if (val.length) {
        return val.length;
    }
    else {
        return val.toString().length;
    }
    // 2. 使用<类型>值
    // if ((<string>val).length) {
    //   return (<string>val).length
    // } else {
    //   return val.toString().length
    // }
}
