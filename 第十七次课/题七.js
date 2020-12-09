//如何去遍历这个数组
var lichees = [
    () => {
        return function () {
        console.log("this is number 1")()
        }
    },
    +function(){console.log("this is number 2")}(),
    {
        name:"this is lichee 3"
    },
        2000,
        "this is lichee 4",
        null,
    new Object({}),
    Object.create({}),
    Object.prototype,
    new Object({}).__proto__,
    new Date(),
    function licheeNut(){
        return {
        printNut:()=>{
            console.log("thisis printNut")
            }
        }
    },
    Object.prototype.tag = "this is tag",
    Object.tag
]

