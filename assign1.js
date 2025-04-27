const pi = 3.14;
let radius;
let circumference;

document.getElementById('button').onclick = function(){
    radius = document.getElementById('name').value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById('p').textContent = `Circumference of circle = ${circumference}`;
}