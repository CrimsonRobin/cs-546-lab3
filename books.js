//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//Books data link: https://gist.githubusercontent.com/graffixnyc/3381b3ba73c249bfcab1e44d836acb48/raw/e14678cd750a4c4a93614a33a840607dd83fdacc/books.json
import * as helper from "./helpers.js";

const getBookById = async (id) => {
    if(typeof id !== "string") {
        throw new Error("given id is not a string.");
    }
    let trimId = id.trim();
    if(trimId.length < 1) {
        throw new Error("given id is empty space.");
    }
    const data = await helper.getBooks();
    const bookObj = data.find(({id}) => id === trimId);
    if(bookObj === undefined) {
        throw new Error("book not found.");
    }
    return bookObj;
};

const booksByPageCount = async (min, max) => {
    if(Number.isSafeInteger(min) == false || Number.isSafeInteger(max) == false) {
        throw new Error("given parameters are not whole numbers.");
    }
    if(min <= 0 || max <= 0) {
        throw new Error("parameters must be positive numbers.");
    }
    if(min > max) {
        throw new Error("max must be greater than min.");
    }

    const bookIdArray = [];
    const data = await helper.getBooks();

    for(const bookObj of data) {
        if(bookObj.pageCount >= min && bookObj.pageCount <= max) {
            bookIdArray.push(bookObj.id);
        }
    }

    return bookIdArray;
};

const sameYear = async (year) => {
    if(Number.isSafeInteger(year) == false) {
        throw new Error("given year is not a whole number.");
    }
    if(year < 1900 || year > 2024) {
        throw new Error("given year is not a valid year.");
    }

    const data = await helper.getBooks();

    const bookObjArray = [];

    for(const bookObj of data) {
        const bookDate = new Date(bookObj.publicationDate);
        if(bookDate.getFullYear() === year) {
            bookObjArray.push(bookObj);
        }
    }

    return bookObjArray;
};

const minMaxPrice = async () => {
    const returnObj = {cheapest: [], mostExpensive: []};
    const data = await helper.getBooks();

    data.sort((a, b) => a.price - b.price);
    const cheap = data.at(0);
    const expensive = data.at(-1);

    const cheapFilterArray = data.filter(({price}) => price === cheap.price);
    const expensiveFilterArray = data.filter(({price}) => price === expensive.price);

    const cheapBookIdArray = cheapFilterArray.map(({id}) => id);
    const expensiveBookIdArray = expensiveFilterArray.map(({id}) => id);

    returnObj.cheapest = cheapBookIdArray;
    returnObj.mostExpensive = expensiveBookIdArray;

    return returnObj;
};

const searchBooksByPublisher = async (publisher) => {
    if(typeof publisher !== "string") {
        throw new Error("given publisher is not a string.");
    }
    let trimPublisher = publisher.trim();
    const data = await helper.getBooks();

    const publisherFilterArray = data.filter(({publisher}) => publisher.toUpperCase() === trimPublisher.toUpperCase());
    if(publisherFilterArray.length == 0) {
        throw new Error("given publisher is not in the dataset.");
    }
    const returnArray = publisherFilterArray.map(({id}) => id);

    return returnArray;
};

export {getBookById, booksByPageCount, sameYear, minMaxPrice, searchBooksByPublisher}