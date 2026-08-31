{
    const array = [1, 2, 3, 4, 5, 6, 7, 9, 10]
    let numbers = []
    const addTen = (element) => {

        return console.log(element + 10);



    }


    array.forEach(addTen)
}


{

    const array = [1, 2, 3, 4, 5, 6, 7, 9, 10]
    const newNumbers = array.map((number) => number + 10)
    console.log(newNumbers);

}


// Map chaining method
{

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const newarray = array.map((number) => number * 10).map((number) => number + 1).filter((number) => number % 3 == 0)
    console.log(newarray);
    

}


