// const enum in typescript behave simmilar to macros in C
const enum ModeConstant
{
	Level1,
	Level2,
	Level3,
}

 // During compilations Mode.Level3 will be replace with value that it represents
let mode = ModeConstant.Level3;


const enum ModeConstant
{
	Option1 = 1 + 3,
	Option2,
// 	ERROR: const enum members initializer must be constant expression
//	Option3 = mode,
}
