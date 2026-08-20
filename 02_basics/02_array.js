let class1 = ["Ali","Sian","Ahmed","Abdullah"]
let class2 = ["Asim","Saim","Qasim"]

let whole = class1.concat(class2);

console.log(whole);

let name1 = ["Ali","Sian","Ahmed","Abdullah"]
let name2 = ["Asim","Saim","Qasim"]

let names = [...name1, ...name2,]
console.log(names);


let score1 = 100;
let score2 = 200;
let score3 = 300;
let game = "Cricket"

let score = Array.of(score1,score2,score3, game);
console.log(score);

let unOrganizedArray = [1,2,3,4,[2,4,6,8],[1,2,[2,7]],5]

let organizedArray = unOrganizedArray.flat(Infinity)

console.log(organizedArray);