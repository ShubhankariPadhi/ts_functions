//function containing arrays of any type
/*function getArray(items:any[]):any[]{
    return new Array().concat(items);
}
let myNUmArray=getArray([100,200,300]);
let mystrArray=getArray(["subhi","sonam","suhana"]);

myNUmArray.push(111);
mystrArray.push("sunita");

myNUmArray.push("suman");
mystrArray.push(400);

console.log(myNUmArray);
console.log(mystrArray);*/
//any type of data can be stored into any array...to make particular type generics are used
/*function getArray<T>(items:T[]):T[]{
    return new Array<T>().concat(items);
}
let myNumArray=getArray<number>([100,200,300]);
let myStrArray=getArray<string>(["subhi","suhana","sunaina"]);

myNumArray.push(400);
myStrArray.push("suman");

//myNumArray.push("");
//myStrArray.push(111);*/
//Calling Generic Function without Specifying the Type
/*
function getArray<T>(items:T[]):T[]{
    return new Array<T>().concat(items);
}
let myNumArray=getArray([100,200,300]);
let myStrArray=getArray(["subhi","suhana","sunaina"]);

myNumArray.push(400);
myStrArray.push("suman");

//myNumArray.push("");
//myStrArray.push(111);*/
// Multiple Type Variables
/*function  displayType<T,U>(id:T,name:U):void{
    console.log(typeof (id)+" "+typeof name);
}
displayType<number,string>(1,"subhi");*/
//function with both generic and non generic
/*function  displayType<T>(id:T,name:string):void{
    console.log(typeof (id)+" "+typeof name);
}
displayType<number>(1,"subhi");*/
//GENERIC TYPE METHODS AND PROPERTIES
/*
function displayType<T,U>(id:T,name:U):void{
    id.toString();
    name.toString();

    //id.toFixed();//compilation error
    //name.toUpperCase();//compilation error
}*/
//generic array methods
/*class Persona{
    id:number;
    name:string;

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }

}

function display<T extends Persona>(per:T ):void{

    console.log("value"+$`{per.id}`+"  "+$`{per.name}`);

}
var per=new Persona(1111,"subhi");
display(per);
//display(11,"11j");//compilation error*/
//generic interface as type
/*interface KeyPair<T,U>{
key:T;
value:U;
}

let kv1:KeyPair<number,string>={key:11,value:"subhi"};
let kv2:KeyPair<number,number>={key:111,value:123};*/
//generic interface as function type
/*

interface keyValueProcessor<T,U>{
    (key:T,value:U):void;


}


function processNumKeyPairs(key:number, value:number):void {
    console.log(`processKeyPairs: key = ${key}, value = ${value}`);
    console.log('processNumKeyPairs: key = ' + key + ', value = ' + value)
}

function processStringKeyPairs(key: number, value:string):void {
    console.log('processStringKeyPairs: key = '+ key + ', value = ' + value)
}

/!*
let newvar:keyValueProcessor<number,number>;
newvar(10,20);*!/


let newvar:keyValueProcessor<number,number>=processNumKeyPairs;

newvar(10,20);

function trysomethingnew(key:string,value:number):void{
    console.log('proceess  '+ typeof key);
}
let va:keyValueProcessor<string,number>=trysomethingnew;
va("subhi",11);*/
//generic interface as function type
/*
interface InterfacewithClass<T,U>{
process(key:string,value:number):void;
}
class clsToImplIntfc implements InterfacewithClass<string,number>{
process(n:string,v:number){

    console.log(n.toUpperCase()+" "+v);
}
}
let variabl:InterfacewithClass<string,number>=new clsToImplIntfc();
variabl.process("subhi",11);*/
//class
var KeyValuePair = (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    KeyValuePair.prototype.display = function () {
        console.log("Key = " + this.key + ", val = " + this.val);
    };
    return KeyValuePair;
}());
var kvp1 = new KeyValuePair();
kvp1.setKeyValue(1, "Steve");
kvp1.display(); //Output: Key = 1, Val = Steve
var kvp2 = new KeyValuePair();
kvp2.setKeyValue("CEO", "Bill");
kvp2.display(); //Output: Key = CEO, Val = Bill
var implClass = (function () {
    function implClass() {
    }
    implClass.prototype.process = function (key, value) {
        console.log("Key = " + key + ", val = " + value);
    };
    ;
    return implClass;
}());
var proc = new implClass();
proc.process(1, 'Bill'); //Output: processKeyPairs: key = 1, value = Bill
//# sourceMappingURL=Generic_ts.js.map