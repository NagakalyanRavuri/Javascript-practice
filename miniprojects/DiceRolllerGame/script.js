document.getElementById('roll').onclick = function() {
    const num = Math.ceil(Math.random() * 6);
    document.getElementById('text').textContent = num;
    document.getElementById('dice').src = `DiceImages/${num}.png`;
};
