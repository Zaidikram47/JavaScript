for (let index = 0; index <= 10; index++) {
    const element = index
    if (element % 2 == 0 && element !== 0) {
        console.log(element);
    }
}

{
    const table = (number) => {
        for (let index = 1; index <= 10; index++) {
            console.log(number + `x` + index + `=` + number * index);
        }
    }
}


{
    const HowManyTimes = (number) => {
        let counter = 0
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2, 4, 61, 3, , 2, 8, 34, 8, 3, 47, 2, , 8, 2, 5, 9, 0, 6, 42, 4, 6, 9, 9, 7, 5, 3, 2, 3, 5, 6, 8, 0, 7, 6, 4, 2, 1, 2, 4, 5, 68, 9, 3]
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element == number) {
                counter = counter + 1
            }
        }
        console.log(`Number of times ` + number + ` Repeated : ` + counter)
    }

    HowManyTimes(47)

}


{
    for (let index = 0; index < 20; index++) {
        
        if(index == 5){
            continue
        }
        console.log(index);
           
    }
}