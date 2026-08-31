const greetings = "Hello World!"
let number = 1
for (const greet of greetings) {
    
    if (greet == " ") {
        continue
    }
    
    console.log(number +" "+ greet);
    number++

}


{

    let fruits = ['Apple','Strawberry','Grapes','Banana','Pomegranate','Mango']
    for (const fruit of fruits) {

        console.log(fruit);
        
        
    }
}


{

       let fruits = ['Apple','Strawberry','Grapes','Banana','Pomegranate','Mango']
       for (let index = 0; index < fruits.length; index++) {
        console.log(fruits[index]);
        
        
       }

}



{

    let numbers = [1,2,3,4,5,[31,4324,65,2],[23,23,55,13,5]]
    numbers = numbers.flat(Infinity)
    for (let number of numbers) {
    
        console.log(number);
        

    }
}

{

    const map = new Map()
    map.set("IN","India")    
    map.set("PK","Pakistan")    
    map.set("KSA","Kingdom of Saudi Arabia")    
    map.set("FR","France")    
    
    for (const [key,value] of map) {
        console.log(key + ":-" + value);
        
    }
    
}

