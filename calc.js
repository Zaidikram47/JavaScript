{
    const addition = (val1, val2) => result = val1 + val2
    const subtraction = (val1, val2) => result = val1 - val2
    const division = (val1, val2) => result = Number((val1 / val2).toFixed(2))
    const multiplication = (val1, val2) => result = val1 * val2

    const userInput = "sub"
    const number1 = 4
    const number2 = 7

    switch (userInput) {
        case "add":
            console.log(addition(number1, number2));

            break;
        case "sub":
            console.log(subtraction(number1, number2));

            break;
        case "div":
            console.log(division(number1, number2));

            break;
        case "mul":
            console.log(multiplication(number1, number2));

            break;

        default:
            break;
    }

}

{

    const min = 10
    const max = 20
    const range = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

    console.log(range(min,max));

}

{
    const array = [2,2]
    const lastElement = (array) => {

        let last = array.at(-1)
        if (last == undefined) {
    
            return -1;
        }
        else
            return last
    }

    console.log(lastElement(array));
    
}
