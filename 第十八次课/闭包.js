function pear(){
    var number = 0;
    return function(){
        console.log(number++);
    }
}

var p1 = new pear()
p1()
p1()
p1()
p1()