const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const MyTotal = array.reduce(function (acc, curr) {
    return acc + curr
}, 0)


const Total = array.reduce((acc, curr) => acc + curr, 0) // simplified



console.log(Total);
console.log(MyTotal);