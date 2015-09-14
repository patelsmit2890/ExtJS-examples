Ext.define("app.model.Employee",{
	extend: "Ext.data.Model",
	alias:"widget.emp",
	fields: [
	{name: "empId",type: "int"},
	{name: "empName",type:"string"},
	{name:"designation",type:"string"}
	
	]
});