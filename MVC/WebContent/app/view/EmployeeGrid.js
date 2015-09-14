Ext.define("app.view.EmployeeGrid",{
	extend:"Ext.grid.Panel",
	store: "EmployeeStore",
	title:"Employee Data",
	alias:"widget.EmployeeGrid",
	columns: [
	{
		header: "Employee Id",
		dataIndex: "empId"
	},
	{
		header: "Employee Name",
		dataIndex: "empName"
	},
	{
		header: "Designation",
		dataIndex: "designation"
	}
	]
});