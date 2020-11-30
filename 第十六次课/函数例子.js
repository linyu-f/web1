var pi = function pitaya(){
    console.log("我是火龙果");
}()

let pea1 = 'return '+'`我是一粒${name}`';
let peanut = new Function('name',pea1);
console.log(peanut("花生"));

var peanut1 = function(name){
    return "我是一粒"+ name;
}
console.log(peanut1("沙子"));
