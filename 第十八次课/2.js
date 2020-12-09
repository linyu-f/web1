function nut(){

}
console.log(nut.prototype == new nut().__proto__);
console.log(nut.prototype.__proto__ == Object.prototype);