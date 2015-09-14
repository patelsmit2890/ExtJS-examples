
Ext.Loader.setConfig({
	enabled:true,
	paths:{
		com:"js/com"
	}
});

Ext.require("com.manhattan.training.Customer");
Ext.onReady(function(){
	alert("Smit");
	/*var c = Ext.create("com.manhattan.training.Customer",{customerId:1,custmorName:"Smit",balance:100});
	c.printDetails();*/
});