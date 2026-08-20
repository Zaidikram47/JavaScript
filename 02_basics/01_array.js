const array = [0,1,2,3,4,5,6,7,8,9,10]

console.log(`original Array : ${array}`);

// slice

const array1 = array.slice(1,6);
console.log(array1);
console.log(`original Array : ${array}`);
console.log(typeof array1);


// splice

const array2= array.splice(1,6);

console.log(array2);

console.log(array);

console.log("__________________");


let array7 = [0,2,5,6,7,2,3,6,3]

let array8 = array7.slice(1,5);
console.log(array8);
console.log(array7);
console.log("_______");


array8 = array7.splice(1,2);
console.log(array8);
