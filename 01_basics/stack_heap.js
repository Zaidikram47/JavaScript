// Stack (Primitive datatype)
let username1= "zaid ikram";
let username2 = username1;
username2 = "Ali"
console.log(username1 + " , " + username2);


// Heap (Reference type)

let user1 = {
    name : "Zaid",
    email : "zaidikram@gmail.com",
}

let user2 = user1;
console.log(user1 , user2);

user2.name = "ali"

console.log(user1 , user2);


/*

in stack the value of one variable is not assigned itself to another variable 
rather the copy of the value is assigned to another variable.

but in heap the variables are pointing to the memory address where the value is present
so when assigning value of one variable to another variable basically both variables start
pointing to same memory address and when we change the value of second variable the whole value
in memory address changes hence the value of first variable will also automatically changes

*/