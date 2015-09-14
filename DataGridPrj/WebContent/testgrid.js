
Ext.define("Employee",{
	extend: "Ext.data.Model",
	fields: [
	{name: "empId",type: "int"},
	{name: "empName",type:"string"},
	{name:"designation",type:"string"}
	
	]
});

Ext.define("Address",{
	extend: "Ext.data.Model",
	fields: [
	{name: "id",type: "int"},
	{name: "location",type:"string"},
	{name:"city",type:"string"}
	]
});
	
var employeeStore=Ext.create("Ext.data.Store",{
	model: "Employee",
	//groupField: "designation",
	proxy: {
		type: "ajax",
		url:"http://localhost/DataGridPrj/employee.json",
		reader: "json"
	}
	/*,
	autoLoad:true
*/
});

var grid = Ext.create("Ext.grid.Panel",{
	store: employeeStore,
	title:"Employee Data",
	/*features:[
		Ext.create("Ext.grid.feature.Grouping",{
				groupHeaderTpl: "Listing {name}s  Total---{rows.length}"
		})
	],*/
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
		dataIndex: "designation",
		renderer: function(value,css)
		{
			if(value=="Developer"){
				value="Dev";
				css.style="color:blue";
			}
			else if(value=="Accountant"){
				value="Acc";
				css.style="color:green";
			}
			return value;
		}
	},
	{
	header: "Address",
	dataIndex: "empId",
	renderer: function(value)
	{
	//	alert("rendering");
	//	alert(value);
		//console.log(addressStore.findRecord("id",1));
		var address=addressStore.findRecord("id",value);
		var location=address.get("location");
		var city=address.get("city");
		return location+"  "+city;
	}
	}
	]
});

var addressStore=Ext.create("Ext.data.Store",{
	model: "Address",
	//groupField: "designation",
	proxy: {
		type: "ajax",
		url:"http://localhost/DataGridPrj/addresses.json",
		reader: "json"
	}
	/*,
	autoLoad:true*/

});

function activateGrid()
{
	/*var wnd=Ext.create("Ext.window.Window",{
		items: [grid],
		width: 400,
		height: 300,
		renderTo: Ext.getBody()
	});
	wnd.show();*/
	Ext.create("Ext.grid.Panel",{
	store: employeeStore,
	title:"Employee Data",
	/*features:[
		Ext.create("Ext.grid.feature.Grouping",{
				groupHeaderTpl: "Listing {name}s  Total---{rows.length}"
		})
	],*/
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
		dataIndex: "designation",
		renderer: function(value,css)
		{
			if(value=="Developer"){
				value="Dev";
				css.style="color:blue";
			}
			else if(value=="Accountant"){
				value="Acc";
				css.style="color:green";
			}
			return value;
		}
	},
	{
	header: "Address",
	dataIndex: "empId",
	renderer: function(value)
	{
	//	alert("rendering");
	//	alert(value);
		//console.log(addressStore.findRecord("id",1));
		var address=addressStore.findRecord("id",value);
		var location=address.get("location");
		var city=address.get("city");
		return location+"  "+city;
	}
	}
	],
	renderTo: Ext.getBody()
});
}

Ext.onReady(function()
{

var empStoreLoaded=false;
var addressStoreLoaded=false;
employeeStore.load({
	callback: function()
	{
		empStoreLoaded=true;
	}
		
});
	
addressStore.load({callback:function(){
			addressStoreLoaded=true;
			activateGrid();
		}

});



console.log("loaded");

});



