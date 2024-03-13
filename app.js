//this function displays value
function  abc(value) {
    document.getElementById("result").value += value
}

function calculator() {

    var res = document.getElementById("result").value;
    var p = eval(res)
    document.getElementById("result").value = p;
}

function clearr(){
    document.getElementById("result").value = "";
} 