export interface Rectangle
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

let shape: Rectangle | Circle;

shape = { x: 4, y: 3, radius: 2 };
let radius: number = shape.radius;

let circle: Circle = shape;
// ERROR: Type Circle is not assignable to type Rectangle - width is missing in type Circle
// let rect: Rectangle = shape;

shape = { x: 4, y: 7, width: 10, height: 6};
let width: number = shape.width;

// ERROR: Type Rectangle is not assignable to type Circle - radius is missing in type Rectangle
// circle: Circle = shape;


// ERROR: Wrong conversion
// circle = <Circle> shape;
// let num: number = <number> '123';


// Not an error but wrong code
circle = <Circle> <any> shape;


function getShape(type: string): Rectangle | Circle | undefined
{
	type = type.toLowerCase();
	if (type === 'rectangle') return {x: 0, y:0, width: 10, height: 10};
	else if (type === 'circle') return {x:0, y:0, width:10, height:10};
}

circle = <Circle>getShape('circle');
circle = <Circle>getShape('rectangle');

