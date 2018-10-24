export enum Mode
{
	two = 2
}

let ten_str: string = '10';
let one_num: number = 1;
let two_enum: Mode = Mode.two;

// string
ten_str + one_num;

// number
one_num + two_enum;

// number
+ten_str;
-ten_str;

// number
let twelve: number = two_enum + (+ten_str);

console.log(1 + (+'10a'));
