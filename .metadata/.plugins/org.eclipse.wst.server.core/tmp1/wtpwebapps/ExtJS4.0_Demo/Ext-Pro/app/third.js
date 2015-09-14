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

	var emp1 = Ext.create("Employee",{id:5,name:"Smit",designation:"Developer"});
	//console.log(emp1.getId()+"\t"+emp1.getName()+"\t"+emp1.getDesignation());
	//emp1.printDetails();
	var div1=Ext.get("test");
	var htmlContent = "<br> Id:"+emp1.getId();
	htmlContent =htmlContent+ "<br> Name:"+emp1.getName()+"<br> Designation:"+emp1.getDesignation();
	
	//alert("br");
	div1.setHTML(htmlContent);
});