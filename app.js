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

try {
    const authorsByHometown = await authors.searchAuthorsByHometown("New York City", "NY");
    // Returns ["Maurice McKinless","Mayer Stadart"] // there are others, but this an example of just a few authors
    console.log(authorsByHometown);
} catch (error) {
    console.error(error.message);
}

try {
    const authorsByHometown = await authors.searchAuthorsByHometown(123, 456); // Throws Error 
    console.log(authorsByHometown);
} catch (error) {
    console.error(error.message);
}

try {
    const authorsByHometown = await authors.searchAuthorsByHometown("", ""); // Throws Error
    console.log(authorsByHometown);
} catch (error) {
    console.error(error.message);
}

try {
    const authorsByHometown = await authors.searchAuthorsByHometown("Patrick", "Hill"); // Throws Error because Hill is not a valid state
    console.log(authorsByHometown);
} catch (error) {
    console.error(error.message);
}

try {
    const authorsByHometown = await authors.searchAuthorsByHometown(); // Throws Error
    console.log(authorsByHometown);
} catch (error) {
    console.error(error.message);
}

try {
    const authorBooks = await authors.getAuthorBooks("69b3f32f-5690-49d1-b9a6-9d2dd7d6e6cd"); // Returns: ["Jason X", "Nanny McPhee"]
    console.log(authorBooks);
} catch (error) {
    console.error(error.message);
}

try {
    const authorBooks = await authors.getAuthorBooks("2155574a-80b0-4389-8bb3-3240da52b770"); // Returns: []
    console.log(authorBooks);
} catch (error) {
    console.error(error.message);
}

try {
    const authorBooks = await authors.getAuthorBooks(""); // Throws Error
    console.log(authorBooks);
} catch (error) {
    console.error(error.message);
}

try {
    const authorBooks = await authors.getAuthorBooks(230); // Throws Error
    console.log(authorBooks);
} catch (error) {
    console.error(error.message);
}

try {
    const authorBooks = await authors.getAuthorBooks(); // Throws Error:
    console.log(authorBooks);
} catch (error) {
    console.error(error.message);
}

try {
    const BookId = await books.getBookById("99875ad8-a1d3-42ea-8d7b-5ac4cd4edb9e"); 
    /* Returns: 
    {   
      id: '99875ad8-a1d3-42ea-8d7b-5ac4cd4edb9e',   
      title: 'No habrá paz para los malvados',   
      genres: ['Art', 'Travel'],   
      publicationDate: '5/7/2018',   
      publisher: 'Avamm',   
      summary:   'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',   
      isbn: '520476104-7',   
      language: 'Finnish',   
      pageCount: 693,   
      price: 25.66,   
      format: ['E-Book', 'Hardcover', 'Paperback'],   
      authorId: 'f645d28a-670a-457a-b55f-a32876b8511d' 
    } */
    console.log(BookId);
} catch (error) {
    console.error(error.message);
}

try {
    const BookId = await books.getBookById(-1); // Throws Error 
    console.log(BookId);
} catch (error) {
    console.error(error.message);
}

try {
    const BookId = await books.getBookById(1001); // Throws Error
    console.log(BookId);
} catch (error) {
    console.error(error.message);
}

try {
    const BookId = await books.getBookById();// Throws Error
    console.log(BookId);
} catch (error) {
    console.error(error.message);
}

try {
    const BookId = await books.getBookById('7989fa5e-5617-43f7-a931-46036f9dbcff');// Throws book not found Error
    console.log(BookId);
} catch (error) {
    console.error(error.message);
}

try {
    const bookPageCount = await books.booksByPageCount(300, 500); 
    // Returns: ["fe64fc98-95ff-4d47-bac8-93c755b85c95", "04e55bc9-0c7a-47a6-a403-52eabf25c6ef"] //there are more, these are just a few examples
    console.log(bookPageCount);
} catch (error) {
    console.error(error.message);
}

try {
    const bookPageCount = await books.booksByPageCount(-1, 100); // Throws Error 
    console.log(bookPageCount);
} catch (error) {
    console.error(error.message);
}

try {
    const bookPageCount = await books.booksByPageCount("ABC", "3"); // Throws Error 
    console.log(bookPageCount);
} catch (error) {
    console.error(error.message);
}

try {
    const bookPageCount = await books.booksByPageCount(); // Throws Error
    console.log(bookPageCount);
} catch (error) {
    console.error(error.message);
}

try {
    const SameYear = await books.sameYear(2000);
    console.log(SameYear);
} catch (error) {
    console.error(error.message);
}

try {
    const SameYear = await books.sameYear(-1);
    console.log(SameYear);
} catch (error) {
    console.error(error.message);
}

try {
    const SameYear = await books.sameYear(1001);
    console.log(SameYear);
} catch (error) {
    console.error(error.message);
}

try {
    const SameYear = await books.sameYear();
    console.log(SameYear);
} catch (error) {
    console.error(error.message);
}

try {
    const SameYear = await books.sameYear(false);
    console.log(SameYear);
} catch (error) {
    console.error(error.message);
}

try {
    const SameYear = await books.sameYear('foo bar');
    console.log(SameYear);
} catch (error) {
    console.error(error.message);
}

try {
    const minMaxP = await books.minMaxPrice();
    console.log(minMaxP);
} catch (error) {
    console.error(error.message);
}

try {
    const searchPublisher = await books.searchBooksByPublisher("Skilith"); // Returns ["519c733a-6a5d-451f-927d-0e860b5d1e3d", "254a77b0-f055-4dc1-b9fa-3b23d811c8be"]
    console.log(searchPublisher);
} catch (error) {
    console.error(error.message);
}

try {
    const searchPublisher = await books.searchBooksByPublisher("A fake publisher"); // Throws Error 
    console.log(searchPublisher);
} catch (error) {
    console.error(error.message);
}

try {
    const searchPublisher = await books.searchBooksByPublisher();// Throws Error
    console.log(searchPublisher);
} catch (error) {
    console.error(error.message);
}

try {
    const searchPublisher = await books.searchBooksByPublisher(false)// throws error 
    console.log(searchPublisher);
} catch (error) {
    console.error(error.message);
}

try {
    const searchPublisher = await books.searchBooksByPublisher('foo bar');// Throws Error
    console.log(searchPublisher);
} catch (error) {
    console.error(error.message);
}