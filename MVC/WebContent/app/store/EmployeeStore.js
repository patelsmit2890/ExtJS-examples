Ext.define("app.store.EmployeeStore",{
	extend: "Ext.data.Store",
	model: "app.model.Employee",
	//groupField: "designation",
	proxy: {
		type: "ajax",
		url:"Employee.json",
		reader: "json"
	}
	,
	autoLoad:true

});