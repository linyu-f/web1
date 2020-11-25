//第七题 请在console.log里面完善代码，并使得程序运行打印出
//this is red apple 和 this is blue apple
let red = function redApple(){
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
    console.log(red()()()()());
}
apple()