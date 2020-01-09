
//union type
/*
function print(text: string | string[]): string {
    if (typeof text === 'string') {
        return text;
    }

    // compiler now knows that you can use join
    // and that variable type is definitely string[]

    return text.join(' ');
}

let x = print('hello text');
let y = print(['hello', 'text', 'array']);

// let z = print(5); // Error: Argument of type '5' is not assignable to type 'string | string[]'

console.log(x);
console.log(y);*/






//union types with built-in types or your own classes / interfaces:


/*
interface IStudent {
    id: string;
    age: number;
}

interface IWorker {
    companyId: string;
}

type IUnionType = IStudent | IWorker;

let p: IUnionType = {
    id: 'ID3241',
    age: 21
};

// p = 3; // Type '3' is not assignable to type 'IUnionType'

p = {
    companyId: 'cid993'
};*/

//Type Aliases
/*interface IStudent {
    id: string;
    age: number;
}

interface IWorker {
    companyId: string;
}

type IStudentAlias = IStudent;

type ICustomType = IStudent | IWorker;

let s: IStudentAlias = {
    id: 'ID3241',
    age: 2
};*/

//Generic type aliases
/*
interface GenericInterface<T1, T2>
{
    x: T1;
    y: T2;
}
//Usage of generic interface:
let c: GenericInterface<number, string> = {
    x: 3,
    y: 'hey'
};*/

// intersection type

//You will notice that type X and type Y both have property c. However, type of the property is not the same and
// once we try to assign value to it we get an error from the compiler.

/*interface IStudent {
    id: string;
    age: number;
}

interface IWorker {
    companyId: string;
}

type A = IStudent & IWorker;

let x: A;

x.age = 5;
x.companyId = 'CID5241';
x.id = 'ID3241';*/



/*interface X {
    c: string;
    d: string;
}

interface Y {
    c: number;
    e: string
}

type XY = X & Y;
type YX = Y & X;

let p: XY;
let q: XY;

p.c = 4; // Error: Type '4' is not assignable to type 'string & number'
q.c = 3; // Error: Type '3' is not assignable to type 'string & number'

p.c = 'text'; // Error: Type 'text' is not assignable to type 'string & number'
q.c = 'text'; // Error: Type 'text' is not assignable to type 'string & number'*/

//  As a result we can combine those types to form a new type and use it:

/*
interface D { d: boolean; }
interface E { e: string; }
interface F { f: number; }

interface A { x: D; }
interface B { x: E; }
interface C { x: F; }

type ABC = A & B & C;

let abc: ABC = {
    x: {
        d: true,
        e: 'codingblast',
        f: 3
    }
};

console.log('abc:', abc);*/

/*

interface IStudent1 {companyId: string;}
interface IStudent2 {id: number;}

interface IWorker1 { x:IStudent1;}
interface IWorker2 { x:IStudent2;}

type Test1 = IWorker1 &IWorker2;



let abc: Test1 = {
    x: { companyId:" ",
        id:1
    }
};
console.log('abc:', abc);*/
