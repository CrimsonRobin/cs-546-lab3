//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//Authors data link: https://gist.githubusercontent.com/graffixnyc/a086a55e04f25e538b5d52a095fe4467/raw/e9f835e9a5439a647a24fa272fcb8f5a2b94dece/authors.json
import { getAuthors } from "./helpers.js";
//you must use axios to get the data

const getAuthorById = async (id) => {
    if(typeof id !== "string") {
        throw new Error("given id is not a string.");
    }
    let trimId = id.trim();
    if(trimId.length < 1) {
        throw new Error("given id is empty space.");
    }
    const data = await getAuthors();
    const newObj = data.find(({id}) => id === trimId);
    if(newObj === undefined) {
        throw new Error("author not found.");
    }
    return newObj;
};

const searchAuthorsByAge = async (age) => {};

const getBooksByState = async (state) => {};

const searchAuthorsByHometown = async (town, state) => {};

const getAuthorBooks = async (authorid) => {};

export {getAuthorById, searchAuthorsByAge, getAuthorBooks, getBooksByState, searchAuthorsByHometown}
