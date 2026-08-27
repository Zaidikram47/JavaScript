const user = {
    username: "Zaid Ikram",
    greeting: function () {
        return `${this.username} Welcome to the website`

    }
    
}
console.log(user.greeting());

console.log(user["username"]);

//++++++++++++++++++++++++

let range = function(min,max){

    const result = Math.ceil(Math.random() * (max-min +1)+min);
    return console.log(result);
    
    
   

}

range(10,50)



function test() {
    return "Hello";
}

const x = test();

console.log(x);


// ARROW FUNCTIONS

const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(4,7));

const addThree = (num1,num2) => num1 + num2   // In this case no need to write `Return`

console.log(addThree(4,7));
