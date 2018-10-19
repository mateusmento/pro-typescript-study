let names: string[] = ['NAME112', 'NAME42', 'NAME35', 'NAME6', 'NAME11'];
names = names.sort((a, b) => a.localeCompare(b));
console.log(names);
