enum Vowel
{
	a = 1,
	e,
	i,
	o
}

enum Vowel
{
	u = 5
}

/*
Vowel == {
	a: 1',
	e: 2',
	i: 3',
	o: 4',
	u: 5',
	'1': 'a',
	'2': 'e',
	'3': 'i',
	'4': 'o',
	'5': 'u'
}
*/

// u == 5
let u = Vowel.u;

// vowel_u_str == 'u'
let vowel_u_str = Vowel[u];


///////////////////////////////////////////////////////
/// Values in enum can collapse ///////////////////////

enum Test
{
	v1, v2, v3
}

enum Test
{
	v4 = 0, v5,
}

/*
Test == {
	v1: 0,
	v2: 1,
	v3: 2,
	v4: 0,
	v5: 1,
	'0': 'v4',
	'1': 'v5'
	'2': 'v3',
}
*/ 


enum Name
{
	NAME1 = "TEST",

//	ERROR: NAME2 must have initializer
//	NAME2,

	NAME2 = 1,
	NAME3,
}
