// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (arg,bookName) {
    let newArr = [...arg]
    newArr.push(bookName);
    return newArr;
  
  // Change code above this line
}

// Change code below this line
function remove (arg,bookName) {
    let newArr = [...arg]
    if (newArr.indexOf(bookName) >= 0) {
        newArr.splice(newArr.indexOf(bookName), 1);
        return newArr;
    // Change code above this line
    }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');


console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);
console.log(bookList);