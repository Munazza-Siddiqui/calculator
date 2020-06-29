function getNumber(a){
    var result=document.getElementById("cal");
    result.value += a;
}

function clearResult(){
    var result= document.getElementById("cal");
    result.value="";
}
function getResult(){
    var result = document.getElementById("cal");
    result.value = eval(result.value);

}
function back(){
    var result = document.getElementById("cal");
    result.value=result.value.slice(0,-1);
}
function sqaure(){
    var result = document.getElementById("cal");
    result.value =result.value*result.value;
}
function sqrrt(){
    var result = document.getElementById("cal");
    result.value =Math.sqrt(result.value); 
}




