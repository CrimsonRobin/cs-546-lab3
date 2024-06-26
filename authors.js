//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//Authors data link: https://gist.githubusercontent.com/graffixnyc/a086a55e04f25e538b5d52a095fe4467/raw/e9f835e9a5439a647a24fa272fcb8f5a2b94dece/authors.json
import * as helper from "./helpers.js";
import statesAbbreviations from "states-abbreviations";
//you must use axios to get the data

const getAuthorById = async (id) => {
    if(typeof id !== "string") {
        throw new Error("given id is not a string.");
    }
    let trimId = id.trim();
    if(trimId.length < 1) {
        throw new Error("given id is empty space.");
    }
    const data = await helper.getAuthors();
    const newObj = data.find(({id}) => id === trimId);
    if(newObj === undefined) {
        throw new Error("author not found.");
    }
    return newObj;
};

const searchAuthorsByAge = async (age) => {
    if(Number.isSafeInteger(age) == false) {
        throw new Error("given age is not a number.");
    }
    if(age > 100 || age < 1) {
        throw new Error("given age is not a number between 1 and 100.");
    }
    const data = await helper.getAuthors();
    const newArr = data.filter(({date_of_birth}) => helper.findAge(date_of_birth, age));

    const result = newArr.map(({first_name, last_name}) => first_name.concat(" ", last_name));

    return result;
};

const getBooksByState = async (state) => {
    if(typeof state !== "string") {
        throw new Error("given state is not a string.");
    }
    let trimState = state.trim().toUpperCase();
    if(trimState.length != 2) {
        throw new Error("given state is not 2 characters long.");
    }
    if(statesAbbreviations.hasOwnProperty(trimState) == false) {
        throw new Error("given state is not a valid state abbreviation.");
    }

    const authorData = await helper.getAuthors();
    const bookData = await helper.getBooks();

    const authorFilteredArray = authorData.filter(({HometownState}) => HometownState === trimState);
    //now array of author objects that fulfill the requirements, need to get books and put them into one giant array.
    const bookArray = authorFilteredArray.flatMap(({books}) => books);  //array of book id's

    const bookTitleArray = [];

    for(let bookId of bookArray) {
        for(const bookObj of bookData) {
            if(bookId === bookObj.id) {
                bookTitleArray.push(bookObj.title);
            }
        }
    }

    //const bookFilteredArray = bookData.filter(({id}) => bookArray.find((bid) => bid === id));
    //const bookTitleArray = bookFilteredArray.map(({title}) => title);
    
    return bookTitleArray;
};

const searchAuthorsByHometown = async (town, state) => {
    if(typeof town !== "string" || typeof state !== "string") {
        throw new Error("given parameters are not strings.");
    }

    let trimState = state.trim().toUpperCase();

    if(trimState.length != 2) {
        throw new Error("given state is not 2 characters long.");
    }
    if(statesAbbreviations.hasOwnProperty(trimState) == false) {
        throw new Error("given state is not a valid state abbreviation.");
    }

    let trimTown = town.trim();

    const data = await helper.getAuthors();
    const dataFilteredArray = data.filter(({HometownCity, HometownState}) => HometownCity.toUpperCase() === trimTown.toUpperCase() && HometownState === trimState);
    dataFilteredArray.sort((a, b) => a.last_name > b.last_name ? 1 : -1);
    const result = dataFilteredArray.map(({first_name, last_name}) => first_name.concat(" ", last_name));

    return result;
};

const getAuthorBooks = async (authorid) => {
    if(typeof authorid !== "string") {
        throw new Error("given parameter is not a string.");
    }

    let trimAuthorId = authorid.trim();

    const authorData = await helper.getAuthors();
    const bookData = await helper.getBooks();

    const authorObj = authorData.find(({id}) => id === trimAuthorId);
    if(authorObj == undefined) {
        throw new Error("given author id is not a valid author id.");
    }
    const bookTitleArray = [];
    const BookArray = authorObj.books;
    for(let bookId of BookArray) {
        for(const bookObj of bookData) {
            if(bookId === bookObj.id) {
                bookTitleArray.push(bookObj.title);
            }
        }
    }

    return bookTitleArray;
};

export {getAuthorById, searchAuthorsByAge, getAuthorBooks, getBooksByState, searchAuthorsByHometown}
