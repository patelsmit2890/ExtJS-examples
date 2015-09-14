
Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		title:"Panel with fit layout",
		width:400,
		height:300,
		layout:"fit",
		draggable:true,
		items:{
			xtype:"form",
			title:"Inner Panel",
			id:"innerpanel",
			bodyPadding:10,
			border:true,
			items:[{
				xtype:"textfield",
				fieldLabel:"Name"
			},
			{
				xtype:"datefield",
				fieldLabel:"Date of birth"
			},
			{
				xtype:"button",
				id:"btn1",
				text:"Click me",
				listeners:
				{	
					click:function(){
					alert('Clicked Me..!!');
					}
				}
			}]
		},
		renderTo:Ext.getBody()
	});


});