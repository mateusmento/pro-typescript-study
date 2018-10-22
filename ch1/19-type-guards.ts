
export interface UserCredentials
{
	username: string;
	password: string;
}

export interface UserContact
{
	phone: string;
	email: string;
}

export interface User extends UserCredentials, UserContact
{
	name: string;
}

function isUserCredentials(credentials: any) 
	: credentials is UserCredentials
{
	return 	'username' in credentials && 'password' in credentials;
}

function isUserContact(contact: any)
	: contact is UserContact
{
	return 'phone' in contact && 'email' in contact;
}

function isUser(user: any): user is User
{

	return 'name' in user
		&& isUserCredentials(user)
		&& isUserContact(user);
}


function LogUserLogin(user: User | UserCredentials): void
{

	console.log('username: ', user.username);	
}

function LogUserContact(user: User | UserContact): void
{
	console.log('email: ', user.email);
	console.log('phone: ', user.phone);

}

function LogUser(user: User): void
{
	console.log('name: ', user.name);
	console.log('username: ', user.username);
	console.log('email: ', user.email);
	console.log('phone: ', user.phone);
}

function LogUserInfo(info: User | UserCredentials | UserContact): void
{
	if (isUser(info))
	{
		LogUser(info);
	}
	else
	{
		console.log('name: ', user.name);

		if (isUserCredentials(info))
		{
			LogUserLogin(info);
		}
		else
		{
			LogUserContact(info);
		}
	}
}

let user: User = { 
	name : 'NAME',
	username: 'USER',
	password: 'PASSWORD',
	email: 'EMAIL',
	phone: '999111333'
};

let credentials: UserCredentials = { username: 'USER', password: 'PASSWORD' };
let contact: UserContact = { email: 'EMAIL', phone: '123456789' };

LogUserInfo(user);
console.log('=====================');
LogUserInfo(credentials);
console.log('=====================');
LogUserInfo(contact); 

