/*let myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

*/
let date = new Date("2005, 01, 13")
console.log(typeof date);

console.log(date.toDateString());
console.log(date.getTime());
console.log(date.getDay());
console.log(date.getMilliseconds());


let date1 = new Date("2021, 01, 13");
let date2 = new Date("2022, 01, 13");

let date3 = new Date()
date3 = date2.getTime() - date1.getTime();
console.log(date3);

console.log((date3/1000) % 60);

let sec = ((date3)/1000)%60;
let mins = ((date3)/(1000 *60))%60;
let hours = ((date3)/(1000 *60*60))%24;
let day = ((date3)/(1000 *60*60*24));

console.log(`${day} : ${hours} : ${mins} : ${sec}`);

