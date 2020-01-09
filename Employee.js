"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = (function () {
    function Employee(empName, empCode) {
        this.empCode = empCode;
        this.empName = StringUtility.ToCapital(empName);
    }
    Employee.prototype.displayEmployee = function () {
        console.log("employee code:" + this.empCode + "employee name:" + this.empName);
    };
    return Employee;
}());
exports.Employee = Employee;
var companyName = "Semanticbits";
//# sourceMappingURL=Employee.js.map