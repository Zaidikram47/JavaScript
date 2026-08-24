function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result
}
let result = addTwoNumbers(4, 7);
console.log(result);


function loginUserMessage(username) {

    if (username === undefined) {

        return console.log("Please enter the username");
    }
    else {
        return `${username} Just logged in`
    }

}

console.log(loginUserMessage("Zaid"))

function shoppingCart(...num1) {           // ...num1 stores all the values into a single array
    return num1
}
console.log(shoppingCart(2, 5, 2, 55, 23));

// OBJECTS IN FUNCTIONS

const user = {
    username : "zaid",
    age : 21,
}

function objecthandle(anyobject){
    return console.log(`username : ${anyobject["username"]}\nage : ${anyobject["age"]}`);
    
}

objecthandle(user)

// ARRAY IN FUNCTIONS

const array = [1,2,3,4,5,6,7,8,9,3,54,1,3,12,5,3,2]

function arrayhandle(anyarray){
    return console.log(`The first element of array is : ${anyarray[0]}\nLast element of array is ${anyarray.at(-1)}`);
    
}
arrayhandle(array)


const games = {

    names : ["PUBG", "Assassin's Creed", "Red Dead Redemption", "HITMAN WOA", "Counter Strike"],
    age : 18,
}

let key = "genre";
games["genre"] = "Cool"

