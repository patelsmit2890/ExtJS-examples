
Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		draggable:true,
		layout:{
			type:"accordion"
				//align:"stretch"
		},
		width:400,
		height:400,
		title:"Accordian Panel",
		defaults:{
			tpl:"<b>This is {panel} </b>"

		},
		items:[{
			xtype:"panel",
			title:"Panel 1",
			data:{panel:"First"}
		/*,
	items:[{
	xtype:"textfield",
	fieldLabel:"Your Name",
	id:"name"}]	*/
		},
		{
			xtype:"panel",
			title:"Panel 2",
			data:{panel:"Second"}

		},
		{
			xtype:"panel",
			title:"Panel 3",
			data:{panel:"Third"}

		}],
		renderTo:Ext.getBody()
	});
});