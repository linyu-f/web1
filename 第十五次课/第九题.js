//第九道    如果想把 this is small orange 和 this is big orange 都打印出来如何操作
var blackOrange = ()=> function(){console.log("this is small orange")
return function(){
console.log("this is big orange")
    }
}
blackOrange()()()