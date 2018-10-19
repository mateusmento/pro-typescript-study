// type of five is number
let five = 5;

// type of empty is any
let empty;

let str: string;

// type of hello is string that must be equal to 'Hello!'
let hello: 'Hello!';

// type of user is any object that contains the specified fileds
let user: {name: string, username: string, password: string};

user = {name: 'me', username: 'justme', password: 'hj34kj2kh'};

// specify a type of object that must contains the listed fields matching the theirs specified types
interface User
{
	name: string;
	username: string;
	password: string;
}

// type of printMe is any function with the specified parameters and return value
let printMe: (me: User) => void;

printMe = me => console.log(me);

// NamedObject is a alias for the type of objects that contains the listed fields
type NamedObject = {
	name: string
}

// UserAlias is a alias for the type User
type UserAlias = User;
