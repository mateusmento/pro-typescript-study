interface Rectangle
{
	x: number;
	y: number;
	width: number;
	height: number;
}

interface Circle
{
	x: number;
	y: number;
	radius: number;
}

let shape: Circle | Rectangle;
shape = { x: 4, y: 3, radius: 2 };

let circle: Circle = shape;
let radius: number = shape.radius;
