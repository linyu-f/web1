//第十道题  补充程序代码，运行打印出 9999
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
}
console.log(blackberry().smallBlackberry()());

