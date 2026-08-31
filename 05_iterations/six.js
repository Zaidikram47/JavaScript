{
    const array = [1, 2, 3, 4, 5, 6, 7, 9, 10]
    for (let index = 0; index < array.length; index++) {

        if (array[index] <= 4) {
            continue
        }
        console.log(array[index]);


    }
}


{

    const array = [1, 2, 3, 4, 5, 6, 8, 9, 10]

    const greater = array.filter((element) => element > 4)
    console.log(greater);


}


{

    const books = [
        { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
        { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
        { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
        { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
        { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
        { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
        { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
        { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
        { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    ];

    const filtergenre = (parameter) => {
        const userBooks = books.filter((bk) => bk["genre"] == parameter)
        console.log(userBooks);
    }
    filtergenre("Science");

    const filterDate = () => {
        const UserBooks = books.filter((bk) => bk["publish"] > 2000)
        console.log(UserBooks);
    }
    filterDate()


}