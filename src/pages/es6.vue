<template>
    <div>

        <h2>es6</h2>

    </div>
</template>
<script>

export default {
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){

        /*let const 的声明 只在最近的一个块内（花括号）有效 
            const 声明要使用大写
        */

       // 对象中 make:make  等同于  make
       //字符串拼串  `abc${变量}`

       console.log('-----------------箭头函数-------------------------')
 
       //箭头函数
       var getPrice = function(){
           return 4.55;
       }
       var getPrice1 = () =>  4.55;
       console.log(getPrice())   //4.55
       console.log(getPrice1())  //4.55

        console.log('-----------------对象和数组解构-------------------------')

        //数组解构
        function foo(){
            return [1,2,3]
        }
        let arr = foo() //[1,2,3]
        let [a,b,c] = foo()
        console.log(a,b,c) // 1 2 3
        

        // let [a, [[b], c]] = [1, [[2], 3]];
        // a = 1
        // b = 2
        // c = 3

        // let [a, , b] = [1, 2, 3];
        // a = 1
        // b = 3

        //let [a = 1, b] = []; // a = 1, b = undefined
        //let [a, ...b] = [1, 2, 3];
        //a = 1
        //b = [2, 3]

        //let [a, b, c, d, e] = 'hello';
        // a = 'h'
        // b = 'e'
        // c = 'l'
        // d = 'l'
        // e = 'o'

        //let [a = 2] = [undefined]; // a = 2 当解构模式有匹配结果，且匹配结果是 undefined 时，会触发默认值作为返回结果。

        //let [a = 3, b = a] = [];     // a = 3, b = 3   a 与 b 匹配结果为 undefined ，触发默认值：a = 3; b = a =3
        //let [a = 3, b = a] = [1];    // a = 1, b = 1   a 正常解构赋值，匹配结果：a = 1，b 匹配结果 undefined ，触发默认值：b = a =1
        //let [a = 3, b = a] = [1, 2]; // a = 1, b = 2   a 与 b 正常解构赋值，匹配结果：a = 1，b = 2

        //对象解构
        function bar(){
            return{
                x:4,
                y:5,
                z:6
            }
        }
        let {x:x,y:y,z:z} = bar()
        console.log(x,y,z) // 4 5 6


        //let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
        // foo = 'aaa'
        // bar = 'bbb'
        
        //let { baz : foo } = { baz : 'ddd' };
        // foo = 'ddd'


        //let obj = {p: ['hello', {y: 'world'}] };
        //let {p: [x, { y }] } = obj;
        // x = 'hello'
        // y = 'world'
       // let obj = {p: ['hello', {y: 'world'}] };
        //let {p: [x, {  }] } = obj;
        // x = 'hello'


        //let obj = {p: [{y: 'world'}] };
        //let {p: [{ y }, x ] } = obj;
        // x = undefined
        // y = 'world'


        //let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
        // a = 10
        // b = 20
        // rest = {c: 30, d: 40}


        //let {a = 10, b = 5} = {a: 3};
        // a = 3; b = 5;
        //let {a: aa = 10, b: bb = 5} = {a: 3};
        // aa = 3; bb = 5;


        console.log('-----------------for of-------------------------')


        //for of 用来遍历一个迭代器 比如 数组
        let nicknames = ['di','boo','punkeye']
        let nicknames3 = {'key1':'di','key2':'boo','key3':'punkeye'}
        nicknames.size = 3;
        for(let nickname of nicknames){
            console.log(nickname)   // 'di'  'boo'  'punkeye'
        }  
        // for(let nickname of nicknames3){
        //     console.log(nickname)   报错
        // }  


        console.log('-----------------for in-------------------------')


        // for in 用来遍历对象中的属性
        let nicknames1 = ['di','boo','punkeye']
        let nicknames2 = {'key1':'di','key2':'boo','key3':'punkeye'}
        nicknames1.size = 3
        for(let nickname in nicknames1){
            console.log(nickname)  // '0' '1' '2' 'size'
        }
        for(let nickname in nicknames2){
            console.log(nickname)  // 'key' 'key2' 'key3' 
        }

        console.log('-----------------Map-------------------------')


        //每个对象都可以看成Map ，在Map中，任何类型都可以作为对象的key，如
        var myMap = new Map();
        var keyString = 'a string',
        keyObj = {},
        keyFunc = function (){}

        //设置值
        myMap.set(keyString,'value 与 a string 关联')
        myMap.set(keyObj,'value 与 keyObj 关联')
        myMap.set(keyFunc,'value 与 keyFunc 关联')

        //获取值
        console.log(myMap.get(keyString))
        myMap.get(keyObj)
        myMap.get(keyFunc)

        console.log('-----------------WeakMap-------------------------')

        /** WeakMap就是一个Map，不用担心内存泄漏，key必须是对象，有四个方法
         * delete(key),
         * has(key),
         * get(key),
         * set(key,val)
        */
       let w = new WeakMap();

        //    w.set('a','b')  报错

        var o1 = {},
            o2 = function(){},
            o3 = window
        
        w.set(o1,37)
        w.set(o2,'azerty')
        w.set(o3,'ddd')

        console.log(w.get(o1)) //37
        console.log(w.get(o2))  //azerty
        console.log(w.get(o3))  //ddd


        console.log(w.has(o3))  //true
        console.log(w.delete(o2))  //true

        console.log(w.get(o2))  //undefined  

     console.log('-----------------Set-------------------------')   
    
    //Set对象是一组不重复的值，重复的值将被忽略，值类型可以是原始类型和饮用类型 
    // 有delete()   和 clear() 方法
    //可以做数组去重
    let mySet = new Set(['rose',2,3,3,"zola",5,'rose','zola'])

    let arr1 = [];
    let arr2 = [];
    
    //可以通过forEach 和 for of 来遍历Set对象
    for(let i of mySet){
        
        arr1.push(i)
    }
    console.log(arr1)

    mySet.forEach((item) => {
        arr2.push(item)
        
    })
    console.log(arr2)


    console.log('-----------------WeakSet-------------------------')   

    //在 WeakSet 中的对象只允许出现一次
    var ws = new WeakSet();
    var obj = {};
    var foo = {};
    
    ws.add(window);
    ws.add(obj);
    
    ws.has(window); // true
    ws.has(foo);    // false, foo 没有添加成功
    
    ws.delete(window); // 从结合中删除 window 对象
    ws.has(window);    // false, window 对象已经被删除

    console.log('-----------------类-------------------------') 

    //类的声明不会提升

    class Task {
        constructor(){
            console.log('task instantiated!')
        }
        showId(){
            console.log(23)
        }
        static loadAll(){
            console.log('Loading all tasks..')
        }
    }
    let task = new Task()
    task.showId();
    // task.loadAll()  报错
    Task.loadAll()

    console.log('-----------------类继承-------------------------') 

    class Car {
        constructor(){
            console.log('creating a new car')
        }

    }

    class Porsche extends Car{
        constructor(){
            super();
            console.log('Creating Porsche')
        }
    }

    let cbbb = new Porsche();

    console.log('-----------------Symbol-------------------------') 

    //es6的新数据类型 目的为了生成一个唯一的标识符，不过访问不到这个标示符； 原始数据类型 表示独一无二 不能用new操作符  作为对象的属性名，可以保证属性不重名
    var sym = Symbol('some optional description')
    console.log(typeof sym);//symbol
    
    var o = {
        val:10,
        [Symbol('random')]: 'i am a symbol'
    }
    console.log(Object.getOwnPropertyNames(o))
    console.log(Object.getOwnPropertySymbols(o))


    let sy = Symbol("key1");
 
    // 写法1
    let syObject = {};
    syObject[sy] = "kk";
    console.log(syObject);    // {Symbol(key1): "kk"}
    
    // 写法2
    let syObject2 = {
    [sy]: "kk"
    };
    console.log(syObject2);    // {Symbol(key1): "kk"}
    
    // 写法3
    let syObject3 = {};
    Object.defineProperty(syObject3, sy, {value: "kk"});
    console.log(syObject3);   // {Symbol(key1): "kk"}
    //Symbol 作为对象属性名时不能用.运算符，要用方括号。因为.运算符后面是字符串，所以取到的是字符串 sy 属性，而不是 Symbol 值 sy 属性。


    let syObject4 = {}
    syObject4[sy] = 'kk'
    syObject4[sy];  //'kk'
    syObject4.sy;   //undefined


    //Symbol.for()
    let yellow = Symbol("Yellow");
    let yellow1 = Symbol.for("Yellow");
    yellow === yellow1;      // false
    
    let yellow2 = Symbol.for("Yellow");
    yellow1 === yellow2;     // true


    //Symbol.keyFor()
    let yellow3 = Symbol.for("Yellow");
    Symbol.keyFor(yellow3);    // "Yellow"
















    }
}
</script>


<style lang="scss" scoped>
@mixin border-radius($px){
    border-radius: $px;
    -webkit-border-radius:$px;
    -moz-border-radius:$px;
    -m-border-radius:$px;
}
    h2 { background-color: aquamarine;  @include border-radius(7px); padding: 10px; margin: 20px; border:1px solid #D0CFD0;}
</style>
