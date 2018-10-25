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

function overload(a: number, b: number);
function overload(a: string, b: string);
function overload(a: any, b: any)
{
	if (typeof a === 'string') a = +a;
	if (typeof b === 'string') b = +b;

	return a + b;
}
