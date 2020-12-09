//如何通过 __proto__ 获得getPrice的调用
function orange(){
    console.log("this is orange")
}
orange.prototype= function (){
    this.name = "张三",
    this.price= 20
    this.getPrice= function (){
        return 200
    }()   
}

console.log(new orange().__proto__());


