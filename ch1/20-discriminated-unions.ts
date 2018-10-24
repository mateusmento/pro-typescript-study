interface Foo
{
	type: 'Foo';
	foo: string;
}

interface Bar
{
	type: 'Bar';
	bar: string;
}

interface Qux
{
	type: 'Qux';
	qux: string;
}

type Message = Foo | Bar | Qux;


function printMessage(msg: Message): void
{
	switch(msg.type)
	{
	case 'Foo':
		console.log('Foo message: ', msg.foo);
		break;
	case 'Bar':
		console.log('Bar message: ', msg.bar);
		break;

	case 'Qux':
		break;

	default:
		// ERROR: Type 'Qux' is not assignable to type 'never'
		// This is because Message type contains Qux interface and this switch doesnt cover Qux.
		// The default case should not be reachable. The problem is solved by add another case for Qux.
		let n: never = msg;
	}
}

let msg: Message  = { type: 'Qux', qux: 'qux' };
let foo: Message = { type: 'Foo', foo: 'foo' };
printMessage(foo);
