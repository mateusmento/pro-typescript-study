interface User
{
	name: string;
}

interface UserDic
{
	[users: string]: User;
}

let users: UserDic = {};

users['USER1'] = { name: 'NAME1' };
users['USER2'] = { name: 'NAME2' };
