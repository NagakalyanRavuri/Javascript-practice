let randm = Math.ceil(Math.random() * 100);  

document.getElementById('button').onclick = function() {
    let number = Number(document.getElementById('number').value);  
    
    if (isNaN(number)) {
        document.getElementById('status').textContent = "Please enter a valid number.";
        return; 
    }

    if (number === randm) {
        document.getElementById('status').textContent = "Correct guess! You win!";
    } else if (number >= randm + 15 || number <= randm - 15) {
        document.getElementById('status').textContent = "You are far from the number!";
    } else {
        document.getElementById('status').textContent = "Incorrect guess, but you're close!";
    }
    console.log(randm)
}
