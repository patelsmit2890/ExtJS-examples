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
		var myPanel = new Ext.Panel({
			width       : 200,
			height      : 150,
			title       : 'Ext Panels rock!',
			collapsible : true,
			renderTo    : Ext.getBody(),
			html        : '<h1>Employee Details</h1><br>'+'<b>Name:</b> '+this.name+'<br>'
		});
		
	}
}
);

Ext.onReady(function(){
	var emp1 = Ext.create("Employee",{id:1,name:"Rajiv",designation:"Developer"});
	emp1.printDetails();
	//console.log(emp1.getId()+"\t"+emp1.getName()+"\t"+emp1.getDesignation());
});