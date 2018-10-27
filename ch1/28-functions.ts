function optional_param(bar?: boolean): string
{
	if (typeof bar !== 'undefined' && bar === true)
		 return 'bar';
	return 'foo';
}

function default_param(buffer: string, sep: string = ';'): string[][]
{
	return buffer.split('\n').map(v => v.split(sep));
}

function test(arr: number[], size = arr.length): number[]
{
	return arr.map(v => size * v);
}

function rest_param(times: number, ...args: any[])
{
	for (let i = 0; i < times; i++)	console.log(...args);
}

function overload(a: string, b: string): string;
function overload(a: number, b: number): number;
function overload(a: number): number;
function overload(one: 1, two: 2): 3;
function overload(a: any, b: any = null): any
{
	if (typeof a === 'string') a = +a;
	if (typeof b === 'string') b = +b;

	return a + b;
}


function multiply(a: number, b: number): number;
function multiply(a: number): (b: number) => number;
function multiply(a: number, b: number|null = null): number | ((b: number) => number)
{
	if (b === null) return (b: number) => a + b;
	return a + b;
}
