export class NamedModel
{
	constructor(private firstName: string = '', private lastName: string = '')
	{
	}

	get name(): string
	{
		return this.firstName + ' ' + this.lastName;
	}

	set name(fullName: string)
	{
		let names: string[] = fullName.trim().split(/\s/);
		let middle = Math.floor(names.length/2);
		this.firstName = names.slice(0, middle).join(' ');
		this.lastName = names.slice(middle, names.length).join(' ');
	}
}

class User extends NamedModel
{
	// constructor is automatic created and the matching one from the superclasses is called
}

let user = new User('Mateus', 'Sarmento');

console.log(user.name);
user.name = 'Jorge Mateus Sarmento de Aguiar';
console.log(user.name);


class Foo
{
	// ERROR: paremeter property is only allowed in a constructor implementation
	// constructor(public foo: number);
	constructor(foo: number);
	constructor(foo: number, bar: number);
	constructor(public foo: number, public bar: number = 3)
	{
	}
}

class Bar extends Foo
{
	static a = 10;
	static b = 20;

	static add(): number
	{
		return Bar.a + this.b;
	}
}

// ERROR: Bar() constructor doesnt exists
// new Bar();
let bar = new Bar(2);
Bar.add();


abstract class Component
{
	abstract Start(): void;
	abstract Update(): void
}

class Entity
{
	private components: Component[] = [];

	Start(): void
	{
		for (let component of this.components) {
			component.Start();
		}
	}

	Update(): void
	{
		for (let component of this.components) {
			component.Update();
		}
	}
}

abstract class Actor extends Entity
{
	abstract Start(): void;
	abstract Update(): void
}

class Player extends Actor
{
	Start(): void {
	}

	Update(): void {
	}
}
