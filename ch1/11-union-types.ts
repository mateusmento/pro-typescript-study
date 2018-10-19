let n: number;
n = 123;

// ERROR: null is not assignable to type number
// n = null;

let fa: number | null;

fa = null;
fa = 123;

interface Named
{
	name: string;
}

type UnionTypeEx = string | Named;

let exm: UnionTypeEx = 'Hello';
exm = {name: 'Name'};
