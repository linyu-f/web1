//第一题
var nut = function(){
    console.log("this is nut-1");
    return "this is nut-2"
}
console.log(nut());  //要打印return，要放在log里面
// nut()

//第二题
var lichee = function(){
    console.log("this is lichee-1");
    return "this is lichee-2"
}()

//第三题  如何让pear也能运行并输出结果
var watermelon = function () {
    console.log("this is watermelon-1");
    return function pear(){
        console.log("this is pear-1");
    }                                                     //返回函数
}
watermelon()()

//第四题
let banana = function banana(){
    console.log("this is banana-1");
    return ()=> function(){
        console.log("this is Anonymous function");
    }()                                                 //返回执行结果
}
banana()()

//第六题 
var redPlum = ()=>{
    return 100
}
var bluePlum =(blue)=>{
    return 200 * blue()
}
var plum = (plum2,plum1)=>{
    let result = plum1(plum2)       //形参
    console.log(result);
}
plum(redPlum,bluePlum)




    



