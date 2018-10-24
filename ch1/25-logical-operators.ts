// falsey values:
let falsies = [ undefined, null, false, '', 0 ];

// any other values is truthy. this includes:
export let truthy = [ 'false', '0' ];


// NOT operator invert a boolean value and evaluate a boolean type.

// foo is falsey
let foo = '';

// bar is truthy
let bar = 'false';

// false
!bar;

// true
!foo;

// to convert any value to boolean type do the double NOT operator

// true
!!bar;

// false
!!foo;


// AND operator

// if the left-hand side value is true then the rigth-hand size value is evaluated
// otherwise the left-hand side value is evaluated.

// 'foo'
foo = 'bar' && 'foo';

// 'bar'
bar = true && 'bar';

// 0
let zero = 0 && 'zero';


// OR operator

// the right-hand side value is evaluated if the left-hand side value is false, otherwise
// the right-hand side value is evaluated.

// 10
let num = 10 || {};

// 'default'
let test = undefined || 'default';

// 'foo'
foo = 0 || 'foo';


// Short-Circuit Evaluation

// AND operator will evaluate the right-hand side only if the left-hand side value is not false

console && console.log('Good, console is not undefined');

let assertion = 10 < 5;
assertion || console.log('Bad, assertion is not correct');


