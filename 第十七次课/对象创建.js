function Pear(name,price,origin,weight){
    this.name = name,
    this.price = price,
    this.origin = origin,
    this.weight = weight;
    this.printName = function(){
        console.log("this is "+this.name);
    }
}
Pear.prototype.printName2 = function(){
    console.log("this is printName2");
}
var p1 = new Pear("一号梨子",12,"河南",10)
p1.printName()
// p1.printName2()
// Pear.printName()
// Pear.printName2()
var p2 = new Pear("二号梨子",22,"河南",12)
p2.printName()

console.log(p1.__proto__);
console.log(Pear.prototype);
console.log(p1.__proto__.__proto__);
console.log(Pear.prototype.__proto__);