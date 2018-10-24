export let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

let oneToTen = [...arr1, ...arr2];

let dic1 = { a:'v', b:'c', c:'c' };
let dic2 = { d:'c', e:'v', f:'c' };

let letters = { ...dic1, ...dic2 };

let arr = [1,2,3];

function sum4(a,b,c,d)
{
	return a+b+c+d;
}

sum4(...arr, 4);
