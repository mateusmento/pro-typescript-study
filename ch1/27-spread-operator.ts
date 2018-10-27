export let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

let oneToTen = [...arr1, ...arr2];

let dic1 = { a:'v', b:'c', c:'c' };
let dic2 = { d:'c', e:'v', f:'c' };

let letters = { ...dic1, ...dic2 };


function sum4(a: any, b: any, c: any, d: any)
{
	return a+b+c+d;
}

function sum(...args: number[])
{
	return args.reduce((sum, value) => sum + value);
}

let arr: number[] = [1,2,3,4];
sum(1, 2, 3, 4, 5);
sum(...arr);

// ERROR: Expected 4 arguments, but got 1 or more.
// sum4(...arr);
