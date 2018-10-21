export interface User
{
	name: string;
}

export interface User
{
	email: string;
}

interface UserDic
{
	[users: string]: User;
}

let users: UserDic = {};

users['USER1'] = { name: 'NAME1', email: '' };
users['USER2'] = { name: 'NAME2', email: '' };
