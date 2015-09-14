
Ext.onReady(function(){
Ext.create("Ext.panel.Panel",{
	layout:{
	type:"vbox",
	align:"stretch"
	},
	width:400,
	height:300,
	title:"VBox Panel",
	defaults:{
	html:"<b>This is a panel</b>"
	
	},
	items:[{
	xtype:"panel",
	title:"Panel 1",
	flex:1
	
	},
	{
	xtype:"panel",
	title:"Panel 2",
	flex:2
	
	},
	{
	xtype:"panel",
	title:"Panel 3",
	flex:1
	
	}],
renderTo:Ext.getBody()
});
});