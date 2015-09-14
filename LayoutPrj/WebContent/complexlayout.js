Ext.onReady(function() {
			Ext.define("SimpleFormPanel", {
				extend: "Ext.form.Panel",
				alias: "widget.simpleform",
				items : [{
							xtype : "numberfield",
							fieldLabel : "First No",
							id : "firstNo"
						}, {
							xtype : "numberfield",
							fieldLabel : "Second No",
							id : "secondNo"
						}, {
							xtype : "numberfield",
							fieldLabel : "Result",
							id : "result"
						}]
			});
			Ext.define("ButtonPanel", {
				extend: "Ext.panel.Panel",
				alias: "widget.buttonpanel",
				layout : {
					type : "hbox",
					align : "stretch"
					
				},
				defaults : {
					margin : "5 5 5 5",
					xtype : "button"
				},
				items : [{
							text : "Add",
							handler : function() {
								perform("add");
							}
						}, {
							text : "Subtract",
							handler : function() {
								perform("subtract");
							}
						}, {
							text : "Multiply",
							handler : function() {
								perform("mul");
							}
						}, {
							text : "Divide",
							handler : function() {
								perform("div");
							}
						}]
			});
			
			Ext.create("Ext.panel.Panel",{
					layout: "border",
					width: 400,
					height: 250,
					items: [
					{
						xtype: "simpleform",
						region: "center"
						},
						{
							xtype: "buttonpanel",
							region: "south"
						}
					
					],
					renderTo: Ext.getBody()
			})
		});
		
		
		function perform(op)
		{
			
			var first=Ext.getCmp("firstNo").getValue();
			var second=Ext.getCmp("secondNo").getValue();
			var result=0;
			if(op=="add"){
				result=first+second;
			}
			else if(op=="subtract")
			{
				result=first-second;
			}
			else if(op=="subtract")
			{
				result=first-second;
			}
			else if(op=="mul")
			{
				result=first*second;
			}
			else if(op=="div")
			{
				result=first/second;
			}
			Ext.getCmp("result").setValue(result);
		}