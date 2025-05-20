// const num = [1, 2, 3, 4, 5];
// const square = num.map(squares);
// const cube = num.map(cubes);
// console.log(cube);
// console.log(square);
// function squares(element){
//    return Math.pow(element,2);
// }

// function cubes(element){
//     return Math.pow(element,3)
// }





// const students = ["kalyan", "chaitu", "sunny", "shanmuck"];

// const upperStudents = students.map(captialize);
// console.log(upperStudents);

// function captialize(element){
//     return element.toUpperCase();
// }




const dates = ["2004-14-11","2005-28-10","2003-1-5"];

const crct = dates.map(format);
console.log(crct);
function format(element){
    const parts = element.split("-");
  return `${parts[1]} - ${parts[2]} - ${parts[0]}`;
    
}
