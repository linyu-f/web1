;(function(x){
    console.log("this is chestnut");
    return (function(x){
        console.log("this is haw");
        x()
        x.printName = function(){
            console.log("this is x.printName");
            return this.name
        }
        return 200 + x.printName()+x()
    })(()=>{
        this.name = 6666
        console.log("this is pitaya")
        return 3999
    })
})()

// Object.tag = "100"
// Object.prototype.tag = 200
// console.log(Object.tag);
// console.log(Object.prototype.tag);

var obj1 = new Object()
obj1.tag = 100
// console.log(Object.prototype.__proto__);
Object.prototype.__proto__ = obj2

var obj2 = new Object({
    tag:200
})
Object.prototype.tag = 300    