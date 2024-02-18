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
    const bookArray = authorFilteredArray.flatMap(({books}) => books);

    const bookFilteredArray = bookData.filter(({id}) => bookArray.find((bid) => bid === id));
    const bookTitleArray = bookFilteredArray.map(({title}) => title);
    
    return bookTitleArray;
};

const searchAuthorsByHometown = async (town, state) => {};

const getAuthorBooks = async (authorid) => {};

export {getAuthorById, searchAuthorsByAge, getAuthorBooks, getBooksByState, searchAuthorsByHometown}
