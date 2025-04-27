let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let result = document.getElementById('value')
document.getElementById('button').onclick = function(){
    let value1 = document.getElementById('num').value;
    value1 = Number(value1);
    if(celsius.checked){
        value1 = (5/9) * (value1 - 32);
        result.textContent = value1;
    }
    else if(fahrenheit.checked){
        value1 = (9/5 * value1)+ 32;
        result.textContent = value1
    }
    else{
        result.textContent = 'please select any one option';
    }
}