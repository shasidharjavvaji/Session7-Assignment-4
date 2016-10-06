function inner(){
    console.log("Hello World from the inner function");
}

function mainFunc(anotherFunc){
    anotherFunc();
}

mainFunc(inner);