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
