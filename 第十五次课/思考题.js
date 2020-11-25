var haw = (x,y)=>{
    return ()=>{
        x(y)
    }
}

function lichee(li){
    console.log(li())
}

function nut(){
    console.log("this is nut");
    return "this is lichee"
}
haw(lichee,nut)()