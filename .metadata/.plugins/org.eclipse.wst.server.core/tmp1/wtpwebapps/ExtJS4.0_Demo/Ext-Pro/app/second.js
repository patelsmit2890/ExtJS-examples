Ext.define("Employee",{
	config:{
		id:0,
		name:"",
		designation:""
	},
	constructor:function(config){
		this.initConfig(config);
	},
	printDetails:function(){

		console.log(this.id+"\t"+this.name+"\t"+this.designation);
		//alert(this.id+"\t"+this.name+"\t"+this.designation);
	}
}
);

Ext.onReady(function(){

	var emp1 = Ext.create("Employee",{id:1,name:"Rajiv",designation:"Developer"});
	console.log(emp1.getId()+"\t"+emp1.getName()+"\t"+emp1.getDesignation());
	
	var div=Ext.get("test1");
	var htmlContent="Id :"+emp1.getId()+"<br>"+"Name: "+emp1.getName()+"<br>"+"Designation: "+emp1.getDesignation();
	div.setHTML(htmlContent);
});