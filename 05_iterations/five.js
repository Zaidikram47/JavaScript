{
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const square = (element) => {
        console.log(Math.pow(element, 2));

    }
    const cube = (element, index) => {
        console.log(index, "-", element, ":", Math.pow(element, 3));

    }
    console.log("SQUARE");

    array.forEach(square)
    console.log("CUBE");
    array.forEach(cube)

}

{

    const array = ['zaid', 'ali', 'waqas', 'zain', 'sian', 'abdullah', 'hamza', 'umer']

    const UpperCase = (element) => {
        console.log(element.toUpperCase());

    }

    array.forEach(UpperCase)

}

{

    let studentsOfCollege = [
        {
            name: "zaid",
            age: 21,
            class: 11,
            section: "Blue",

            school: {
                name: "SZPS",
                city: "RYK"
            }
        },

        {
            name: "Ali",
            age: 20,
            class: 11,
            section: "Red",

            school: {
                name: "Punjab college",
                city: "Multan"
            }
        }
    ]

    const addProvince = (element) => {
        element["school"]["province"] = "Punjab";

    }
}


{

    const array = ['zaid', 'ali', 'waqas', 'zain', 'sian', 'abdullah', 'hamza', 'umer']
    const Capitalize = (element) => {
        element = element.charAt(0).toUpperCase() + element.slice(1)
        console.log(element);

    }

    array.forEach(Capitalize)
}