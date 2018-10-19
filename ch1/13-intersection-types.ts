export interface NamedObject
{
	name: string;
}

export interface Credentials
{
	username: string;
	password: string
}

type User = NamedObject & Credentials;

let user: User = {
	name: 'NAME1',
	username: 'USER1',
	password: 'YOURSECRET'
};


type Test = User & number;

let test: Test

// ERROR: type '12' is not assignable to type 'Test'
// test = 12;

// ERROR: type 'User' is not assignable to type 'Test'
test = user;
