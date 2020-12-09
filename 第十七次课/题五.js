function watermelon (name,price,number){
    this.name = name,
    this.price = price,
    this.number = number
}
watermelon.prototype.getSum = function (){
    console.log("getSum = "+this.price*this.number);
}
var w1 = new watermelon("一号西瓜",20,3)
w1.getSum()
    