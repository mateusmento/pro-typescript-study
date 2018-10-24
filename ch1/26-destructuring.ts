export let arr = [ 1, 2, 3 ];
let [ one, two, three ] = arr;

let words = [ 'hello', 'hi', 'oye', 'eh' ];
let [ hello, , oye, eh, ok, none ] = words;

ok === undefined;
none == undefined;

[ , , , , ok = 'ok', none = 'none' ] = words;

let odds = [ 1, 3, 5, 7, 9 ];
let [ a, b, ...rest ] = odds;

[a,b] = [b,a];

let login = {user: 'LOGIN', pwd: 'PWD'};

let { user: username, pwd: password } = login;
let { user, pwd } = login;

let dic = { a: 1, b: 2, c: 3, d: 4 };
let { c, d, ...remaing } = dic;


function calcRisk(): [ number, boolean ]
{
	let num = Math.random();
	return [ num, num > 0.5 ];
}

let [ risk, risky ] = calcRisk();

if (!risky)
{
	// we shall do business
}
