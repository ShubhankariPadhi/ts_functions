/// <reference path="/home/sb-sandeep/Desktop/subha/typeScript_Examples/TypeScript_project_01/Module_StringUtility.ts" />
export let age:number;
export class Employee{
    empCode:number;
    empName:string;
    constructor(empName:string,empCode:number){
     this.empCode=empCode;
     this.empName=StringUtility.ToCapital(empName);
    }
    displayEmployee(){
        console.log("employee code:"+this.empCode+"employee name:"+this.empName);
    }
}
let companyName:string="Semanticbits";


