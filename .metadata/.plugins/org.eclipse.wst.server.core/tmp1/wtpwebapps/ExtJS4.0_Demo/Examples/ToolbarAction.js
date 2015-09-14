//copy example from http://try.sencha.com/extjs/4.1.1/  and paste it here(copy from app.js)

Ext.onReady(function(){
	
	var action = Ext.create('Ext.Action', {
		text: 'Action 1',
		iconCls: 'icon-add',
		handler: function(){
			Ext.example.msg('Click', 'You clicked on "Action 1".');
		}
	});
	var panel = Ext.create('Ext.panel.Panel', {
		title: 'Actions',
		renderTo: document.body,
		width: 600,
		height: 300,
		bodyPadding: 10,
		dockedItems: {
			itemId: 'toolbar',
			xtype: 'toolbar',
			items: [
			        action, // Add the action directly to a toolbar
			        {
			        	text: 'Action menu',
			        	menu: [action] // Add the action directly to a menu
			        }
			        ]
		},
		items: Ext.create('Ext.button.Button', action)       // Add the action as a button
	});

});
