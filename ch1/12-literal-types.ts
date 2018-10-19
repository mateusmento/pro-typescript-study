
let hello: 'Hello World!';
hello = 'Hello World!';


let mouseEvent: 'click' | 'mousedown' | 'mouseup' | 'dbl-click'

type PossibleNames = 'NAME1' | 'NAME2' | 'NAME3';

interface NamedObject
{
	name: string;
}

type Name = PossibleNames | NamedObject;

export let nam: Name;
 
nam = 'NAME2';
nam = {name: 'Mateus'}
