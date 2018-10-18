// list of primitive types

let string_value: string;
let boolean_value: boolean;
let number_value: number;

// a unique and immutable symbol that can be substituted for a string as an object key
let symbol_value: symbol;

// only undefined value is allowed
let undefiened_value: undefined;

// ERROR
//undefiened_value = 12;

// only null value is allowed. default to undefined
let null_value: null;
null_value = null;

//ERROR
//null_value = undefined;

// only undefined value is allowed
let void_variable: void;
void_variable = undefined;

// no value is allowed in assignment. should be leaved unnassgined.
let never_variable: never;

function return_never(): never
{
	// ERROR: function of return type equals to never cannot have return statement
	//return;

	// Neither can have a reachable end.
	throw new Error('This error was throw from a function that never returns');
}

try { return_never() }
catch (err) { console.log(err.toString()); }

