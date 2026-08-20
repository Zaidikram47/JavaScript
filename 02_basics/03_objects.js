let user = {
    name: "Zaid",
    age: 21,
    email: "zaidikram.g610s@gmail.com",
}

console.log(user.name);
console.log(user);
console.log(user["age"]);


let address = "address"
user[address] = "abc"

console.log(user);

// Another example


let game = {
    name: "PUBG",
    rated: 18,
    playable: true,
}

Object.defineProperty(game, "name", { writable: false });  //freez only one specific key in the object


let key = "releaseDate"  //defining the key in the object
game["releaseDate"] = 2018  // assigning the value to the key defined earlier in the object


Object.freeze(game) // freezes all the keys in the object (unables to change the key/values in the object)

key = "company"
game["company"] = "Tencent"

game["playable"] = false
console.log(game);

// ARRAY CONSISTNG OBJECTS

let students = [
    {
        name : "zaid",
        age : 21,
        course : "JS",
    },

    {    name : "Ali",
        age : 20,
        course : "Python"
    }
]

console.log(students);

console.log(students[0]["age"]); // Accessing first element(object) of array and further specific key


// adding new key in object in array

key = "gender"
students[0]["gender"] = "male"
console.log(students);


let games = {
    name : "",
    country : "",

    company : {            //object wihtin an object

        parentcompany : "",
        collaborator : "",

    }
}

games["name"] = "PUBG";    //giving value to object key
games["country"] = "China"
games["company"]["parentcompany"] = "Tencent"
games["company"]["collaborator"] = "Krafton"   // giving value to object's key which is in another object
console.log(games["company"]["parentcompany"]);



// NESTED OBJECTS IN ARRAY


let studentsOfCollege = [
    {
        name : "zaid",
        age : 21,
        class : 11,
        section : "Blue",

        school : {
            name : "SZPS",
            city : "RYK"
        }
    },

    {    name : "Ali",
        age : 20,
        class : 11,
        section : "Red",

        school : {
            name : "Punjab college",
            city : "Multan"
        }
    }
]

key = "province"

studentsOfCollege.forEach(student => {
  student["school"]["province"] = "punjab";
});
//studentsOfCollege[x]["school"]["province"]="punjab";
console.log(studentsOfCollege);



