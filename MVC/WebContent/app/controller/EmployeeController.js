Ext.define("app.controller.EmployeeController",{
extend:"Ext.app.Controller",
models:["Employee"],
stores:["EmployeeStore"],
views:["EmployeeGrid"]
});