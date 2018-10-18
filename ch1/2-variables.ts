let global = 1;

{
	let block = 2;

	global = 3;	

//	ERROR
//	nestedBlock = 'oye?';
	
	functionScope = 'oh yeg!';

	{
		let nestedBlock = 'oh no! too bad :/';
		var functionScope;
	}

}

console.log(functionScope);
