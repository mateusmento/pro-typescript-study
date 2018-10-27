export interface User
{
    name: string;
}

// ERROR: type '{name: ''}' is not assignable to type 'User'
// let user1: User = {name: ''};

export interface User
{
    username: string;
    password: string;
    email: string;
    age: number;
}

let user: User = {
    name: '',
    username: '',
    password: '',
    email: '',
    age: 1
};


interface jQuery
{
    new(): jQuery;
    (select: string): any;
    get(url: string, options: object, fn: Function): void;
}

function test($: jQuery)
{
    $('header');
    $.get('localhost:3000/posts', {flag: true}, (data: any) => data);
}

interface array<T>
{
    [index: number]: T
    length: number;
}

let arr: array<number> = [1,2,3];
