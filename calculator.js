var number1 = ""
var number2 = ""
var i = 0
var todo = ""
var result = ""

function calc(g) {
    g = avoiddot(g)
    console.log(g)
    if (i>=1) {
        number2+=g
        p = fff + number2
        document.getElementById("display").innerHTML = p
        todo = "do"
    }
    else{
        number1+=g
        document.getElementById("display").innerHTML = number1
        result = number1
    }
    allcalc()
}

function allcalc(){
    if (todo=="do") {
        if (number1=="-") {
            number1=-1
        }
        if (number2=="-") {
            number2=-1
        }
        parseInt(number1)
        parseInt(number2)
        if (operation=="+") {
            result = parseInt(number1) + parseInt(number2)
        }
        else if(operation=="-"){
            result = number1 - number2
        }
        else if(operation=="×"){
            result = number1 * number2
        }
        else if(operation=="÷"){
            result = number1 / number2
        }
        else if(operation=="%"){
            result = number1 * (number2/100)
        }
        else if(operation=="^"){
            result = number1 ** number2
        }
        document.getElementById("demoresult").innerHTML = result
    }
}

function oper(o){
    i+=1
    if (i>=2) {
        number1 = result
    }
    fff = number1 + " " + o + " "
    document.getElementById("display").innerHTML = fff
    document.getElementById("demoresult").innerHTML = ""
    operation = o
    number2 = ""
}

function clearall(){
    number1 = ""
    number2 = ""
    result = ""
    i = 0
    todo = ""
    document.getElementById("display").innerHTML = ""
    document.getElementById("demoresult").innerHTML = ""
}

function output() {
    console.log(result)
    number1 = result
    console.log(number1)
    number2 = ""
    i = 0
    todo = ""
    document.getElementById("display").innerHTML = result
    document.getElementById("demoresult").innerHTML = ""
}

function negnum(){
    if (number1=="") {
        number1="-"
        document.getElementById("display").innerHTML = number1
    }
    else if (number1=="-") {
        number1=""
        document.getElementById("display").innerHTML = number1
    }
    else if (i==0){
        number1 = -(number1)
        document.getElementById("display").innerHTML = number1
    }
    else if (number2=="") {
        number2="-"
        p = fff + number2
        document.getElementById("display").innerHTML = p
    }
    else if (number2=="-") {
        number2=""
        p = fff + number2
        document.getElementById("display").innerHTML = p
    }
    else if (i>=1){
        number2 = -(number2)
        p = fff + number2
        document.getElementById("display").innerHTML = p
        allcalc()
        document.getElementById("demoresult").innerHTML = result
    }
}

function avoiddot(g){
    var v=0
    var u=0
    if (g==".") {
        if (number1.toString().includes(".")){
            v+=1
        }
        if (number2.toString().includes(".")){
            u+=1
        }
        if (v>=1 && i==0) {
            M.toast({
                html:"A number can contain only one decimal point",
                classes: "red rounded"
            })
            g = ''
            v=0
            return g
        }
        if (u>=1) {
            M.toast({
                html:"A number can contain only one decimal point",
                classes: "red rounded"
            })
            g = ''
            u=0
            return g
        }
    }
    return g
}