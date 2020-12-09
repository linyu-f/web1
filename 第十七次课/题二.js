let City2 = 'return'+'`this city is ${name}`';
let c2 = new Function('name',City2);
console.log(c2("NanChang"));