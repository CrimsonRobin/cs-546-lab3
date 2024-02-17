/*
This file is where you will import your functions from the two other files and run test cases on your functions by calling them with various inputs.  We will not use this file for grading and is only for your testing purposes to make sure:

1. Your functions in your 2 files are exporting correctly.

2. They are returning the correct output based on the input supplied (throwing errors when you're supposed to, returning the right results etc..).

Note: 
1. You will need that calls your functions like the example below. 
2. Do not create any other files beside the 'package.json' - meaning your zip should only have the files and folder in this stub and a 'package.json' file.
3. Submit all files (including package.json) in a zip with your name in the following format: LastName_FirstName.zip.
4. DO NOT submit a zip containing your node_modules folder.

import * as authors from "./authors.js");

    try{
        const authorData = await authors.getAuthors();
        console.log (authorData);
    }catch(e){
        console.log (e);
    }
*/

import * as authors from "./authors.js";
import * as books from "./books.js";

try {
    const authorid = await authors.getAuthorById("1871e6d7-551f-41cb-9a07-08240b86c95c");
    console.log("GetAuthorById passed test case 1, here is the result: ");
    console.log(authorid);
} catch (error) {
    console.error(error.message);
}

try {
    const authorid = await authors.getAuthorById(-1); // Throws Error
    console.log(authorid);
} catch (error) {
    console.error("GetAuthorById passed test case 2, here is the error: ");
    console.error(error.message);
}

try {
    const authorid = await authors.getAuthorById(1001); // Throws Error
    console.log(authorid);
} catch (error) {
    console.error("GetAuthorById passed test case 3, here is the error: ");
    console.error(error.message);
}

try {
    const authorid = await authors.getAuthorById(); // Throws Error
    console.log(authorid);
} catch (error) {
    console.error("GetAuthorById passed test case 4, here is the error: ");
    console.error(error.message);
}

try {
    const authorid = await authors.getAuthorById('7989fa5e-5617-43f7-a931-46036f9dbcff');// Throws Author not found Error
    console.log(authorid);
} catch (error) {
    console.error("GetAuthorById passed test case 5, here is the error: ");
    console.error(error.message);
}

try {
    const authorAge = await authors.searchAuthorsByAge(40); 
    // Returns: ["Mayer Staddart", "Madelaine Armatage", "Adorne Byrant"...] //Only the first three are shown
    console.log("searchAuthorsByAge passed test case 1, here is the result: ");
    console.log(authorAge);
} catch (error) {
    console.error(error.message);
}

try {
    const authorAge = await authors.searchAuthorsByAge(5000); // Throws Error since there are no results
    console.log(authorAge);
} catch (error) {
    console.error("searchAuthorsByAge passed test case 2, here is the error: ");
    console.error(error.message);
}

try {
    const authorAge = await authors.searchAuthorsByAge(" "); // Throws Error
    console.log(authorAge);
} catch (error) {
    console.error("searchAuthorsByAge passed test case 3, here is the error: ");
    console.error(error.message);
}

try {
    const authorAge = await authors.searchAuthorsByAge("abc"); // Throws Error
    console.log(authorAge);
} catch (error) {
    console.error("searchAuthorsByAge passed test case 4, here is the error: ");
    console.error(error.message);
}

try {
    const authorAge = await authors.searchAuthorsByAge(); // Throws Error 
    console.log(authorAge);
} catch (error) {
    console.error("searchAuthorsByAge passed test case 5, here is the error: ");
    console.error(error.message);
}

try {
    const BooksByState = await authors.getBooksByState("NJ");
    // Returns ["Summertime","Crime and Punishment"] // there are others, but this an example of just a few NJ books
    console.log(BooksByState);
} catch (error) {
    console.error(error.message);
}

try {
    const BooksByState = await authors.getBooksByState(123); // Throws Error 
    console.log(BooksByState);
} catch (error) {
    console.error(error.message);
}

try {
    const BooksByState = await authors.getBooksByState(" "); // Throws Error 
    console.log(BooksByState);
} catch (error) {
    console.error(error.message);
}

try {
    const BooksByState = await authors.getBooksByState("Patrick"); //Throws Error because there is no state Patrick in authors.json
    console.log(BooksByState);
} catch (error) {
    console.error(error.message);
}

try {
    const BooksByState = await authors.getBooksByState(); // Throws Error 
    console.log(BooksByState);
} catch (error) {
    console.error(error.message);
}