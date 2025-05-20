let num = [1, 2, 3, 4, 5];

num.forEach(display);

function display(number){
    console.log(number);
}


let fruits = ["mango" ,"Kiwi", "Banana", "Apple"];
fruits.forEach(FirstCap);
fruits.forEach(displY);

function upperCase(fruit, ar,ind) {
    ind[ar] = fruit.toUpperCase();
}

function displY(fruit){
    console.log(fruit);
}

function FirstCap(fruit , index,array){
    array[index] = fruit.charAt(0).toUpperCase() + fruit.slice(1);
}