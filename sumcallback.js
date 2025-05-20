
function sum(callback,x,y){
   let result = x+y;
    callback(result);
}

function display(result){
    document.getElementById('result').textContent = `Result: ${result}`;

}

sum(display,20,12);

