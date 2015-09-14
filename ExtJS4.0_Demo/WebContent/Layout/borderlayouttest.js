
Ext.onReady(function(){
Ext.create("Ext.container.Viewport",{
	layout:{
	type:"border"
	//align:"stretch"
	},
	width:400,
	height:400,
	title:"Border Panel",
	/*defaults:{
	tpl:"<b>This is {panel} </b>"
	
	},*/
	items:[{
	xtype:"panel",
	title:"Panel 1",
	region:"south",
	flex:.5
	},
	{
	xtype:"panel",
	title:"Panel 2",
	region:"north",
	flex:.5
	
	},
	{
	xtype:"panel",
	title:"Panel 3",
	region:"west",
	collapsible:true,
	split:true,
	flex:.2
	
	},
	{
	xtype:"panel",
	title:"Panel 4",
	region:"east",
	flex:.2
	
	},
	{
	xtype:"panel",
	title:"Panel 5",
	region:"center",
	flex:1
	
	}],
renderTo:Ext.getBody()
});
});