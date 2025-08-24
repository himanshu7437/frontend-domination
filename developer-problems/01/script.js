// developer problem - 1
// debugging a type error: cannot read property of "x"

// var a = {};
// a.name.first; // error -> Uncaught TypeError: Cannot read properties of undefined (reading 'first')
// reason ->  this occurs because we are aceesing a property which doesnt exist.

var a = {};
// solution :- use conditionals.
a?.name?.first; 