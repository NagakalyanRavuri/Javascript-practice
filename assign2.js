
const submit = document.getElementById('button');
const text = document.getElementById('day');

submit.onclick = function(){
    let day = document.getElementById('number').value;
    day = Number(day);
    switch(day){
        case 1: text.textContent = 'monday';
        break;
        case 2: text.textContent = 'Tuesday';
        break;
        case 3: text.textContent = 'Wedneshday';
        break;
        case 4: text.textContent = 'Thursday';
        break;
        case 5: text.textContent = 'Friday';
        break;
        case 6: text.textContent = 'Saturday';
        break;
        case 7: text.textContent = 'Sunday';
        break;
        default: text.textContent = 'Enter a valid number';
        
    }
}