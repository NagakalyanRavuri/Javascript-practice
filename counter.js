let count = 0;
document.getElementById('button1').onclick = function(){
    count = count + 1;
    document.getElementById('count').textContent = count;
}
document.getElementById('button2').onclick = function(){
    count = count - 1;
    document.getElementById('count').textContent = count;
}

document.getElementById('button3').onclick = function(){
    count = 0;
    document.getElementById('count').textContent = count;
}