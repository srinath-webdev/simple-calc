let output = document.getElementById("outputScreen");
function display(num) {
    output.value += num;
}

function calculate(){
    try{
    output.value = eval(output.value);
    }
    catch(err){
        alert("invalid calculation")
    }

}
 function clr() {
    document.getElementById("outputScreen").innerHTML = "";
}

function del(){
    output.value = output.value.slice(0 , -1);
   }

