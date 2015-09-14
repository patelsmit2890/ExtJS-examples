Ext.define("MyComponent",{
	extend:"Ext.Component",
	html:"<b>This is my component</b>"
});
var comp = Ext.create("MyComponent");
var comp2 = Ext.create("Ext.button.Button",{
	text:"Click Me",
	handler:function(){
		Ext.Msg.alert("Thanks","Thanks for clicking me");
	}
});

Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		title:"Test Panel",
		width:300,
		layout: {
			type: 'vbox',
			align: 'left'
		},
		height:200,
		items:[comp,{
			xtype: 'datefield',
			fieldLabel: 'Start date'
		}, {
			xtype: 'datefield',
			fieldLabel: 'End date'
		},comp2
		],
		renderTo:Ext.getBody()
	});
});
