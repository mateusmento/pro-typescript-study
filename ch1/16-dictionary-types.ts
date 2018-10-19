interface User
{
	name: string;
}

interface UserDic
{
	[users: string]: User;
}

let users: UserDic = {};



interface Dic<Key, Value>
{
	[index: Key]: Value;
}

let dic: Dic<Key, Value> = {};

dic['key'] = 'value';
