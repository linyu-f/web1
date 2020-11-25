//第五题 如何打印出 this is MyGrapNut
let grape = function redGrape(){
    return {
        name:"my name is red grape",
        printMyName:()=>{
            return ()=>{
                return Object.create({                                  //演示即可为字符串也可为函数
                    name:"my name is grape nut",
                    printMyGrapeNut:function(){
                        console.log("this is MyGrapNut");
                    }
                })
            }
        }
    }
}
grape().printMyName()().printMyGrapeNut()