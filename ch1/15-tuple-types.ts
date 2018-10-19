let tuple: [string, number, string, string[]];
tuple = ['my', 6, 'wives is', ['you', 'and', 'me']];

// type of words is a empty tuple
let words: [];

// ERROR: type '[string, string]' is not assignable to type '[]'
// words = ['hello', 'world'];

// type of arr is a array of any values
let arr: any[];
arr = [];
