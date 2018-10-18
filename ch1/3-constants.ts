const myConstant = 'immutable';

// ERROR: myConstant is a constants
// myConstant = 'mutable';

const myConstantObject = { variable : 'mutable' };
myConstantObject.variable = 'oops not expexted... :/';
