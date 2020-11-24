//第一题
var nut = function(){
    console.log("this is nut-1");
    return "this is nut-2"
}
nut()

//第二题
var lichee = function(){
    console.log("this is lichee-1");
    return "this is lichee-2"
}()

//第三题
var watermelon = function () {
    console.log("this is watermelon-1");
    return function pear(){
        console.log("this is pear-1");
    }  
}
watermelon()()

//第四题
let banana = function banana(){
    console.log("this is banana-1");
    return ()=> function(){
        console.log("this is Anonymous function");
    }()
}
banana()()

//第五题 如何打印出 this is MyGrapNut
let grape = function redGrape(){
    return {
        name:"my name is red grape",
        printMyName:()=>{
            return ()=>{
                return Object.create({
                    name:"my name is grape nut",
                    printMyGrapeNut:function(){
                        console.log("this is MyGrapNut");
                    }
                })
            }
        }
    }
}

//第六题 
var redplum = ()=>{
    return 100
}
var blueplum =(blue)=>{
    return 200 * blue()
}
var plum = (plum2,plum1)=>{
    let result = plum1(plum2)
    console.log(result);
}
plum(redplum,blueplum)

//第七题 请在console.log里面完善代码，并使得程序运行打印出
//this is red apple 和 this is blue apple
let red = function readApple(){
    return ()=>{
        return function(){
            return ()=>{
                return function(){
                    console.log("this is red apple");
                    return "this is blue apple"
                }
            }
        }
    }
}
let apple = function redApple(){
    console.log("请在这里完善代码");
}()

//第八题
(function(x){
    x()
    console.log("this is yellow orange");
    console.log(function blueOrange(){
        console.log("this is blue orange");
    }())
})(function(){
    console.log("this is orange");
    return "this is red orange"
})

//第九道
var blackOrange = ()=> function(){console.log("this is small orange")
return function(){
console.log("this is big orange")
}()
}()

//第十道题
let blackberry = function (){
    console.log("this is blackberry");
    return {
        smallBlackberry:()=>{
            console.log("this is smallBlackberry");
            return ()=>{
                console.log("this is smallBlackberry nut");
                return 9999
            }
        }
    }
}()
