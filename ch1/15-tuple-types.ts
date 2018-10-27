// type of tuple is a tuple [string, string[]]
let tuple: [string, string[]];
tuple = ['hello', ['you', 'world', 'me']];

// ERROR: type 'string[]' is not assignable to type '[string, string[]]'
// tuple = ['hello', 'world'];

// ERROR: A tuple type element list cannot be empty
// let words: [];

// type of arr is a array of any values
let arr: any[];
arr = [];
