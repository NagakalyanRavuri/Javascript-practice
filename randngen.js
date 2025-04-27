let number
document.getElementById('button').onclick = function(){
    number = Math.ceil(Math.random() * 100);

    document.getElementById('num').textContent = number;
}