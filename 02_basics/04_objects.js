const student = {

    name: "Zaid",
    age: 21,
    gender: "male",
    grade: 12,
    section: "B"
}


// Destructioning
const { name, age, gender, grade, section } = student;  // name,age,gender,grade,section are the variables and their name must be same as the properties(keys) defined in the respective object

console.log(`Hey my name is ${name} and my age is ${age} im in class ${grade} ${section}`);

// To give the different name 

const { name: fullname, age: studentage } = student

console.log(`hey my name is ${fullname} and my age is ${studentage}`);



// OBJECTS PART 2


// merging all the objects into the single object

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

let obj4 = Object.assign({}, obj1, obj2, obj3) // all entities of obj1,obj2,obj3 are assingned to {} which is further assigned to obj4

// another way of merging all the objects into single object

obj4 = { ...obj1, ...obj2, ...obj3 }
