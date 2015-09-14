Ext.onReady(function(){
	var form = Ext.create("Ext.form.Panel",{
		title:"Test Form",
		width:300,
		height:400,
		defaults:{
			xtype:"textfield"
		},
		items:[{
//			xtype:"textfield",
			fieldLabel:"Your Name",
			id:"name"},
			{

//				xtype:"textfield",
				fieldLabel:"Your Age",
				id:"age"
			},
			{
				xtype:"component",
				html:"Gender:"
			},

			Ext.create("Ext.form.field.Radio",{
				boxLabel:"Female",
				name:"gender"
			}),
			Ext.create("Ext.form.field.Radio",{
				boxLabel:"Male",
				name:"gender"
			})
			,
			{
				xtype:"component",
				html:"Marital Status:"
			},
			Ext.create("Ext.form.field.Checkbox",{
				boxLabel:"Married",
				id:"maritalStatus"
			}),
			Ext.create("Ext.form.field.Checkbox",{
				boxLabel:"Single",
				id:"maritalStatus"
			}),
			{
				xtype:"button",
				text:"Send Request",
				handler:function(){
					//alert('hello');
					sendRequest();
				}
			}],
			renderTo:Ext.getBody()
	});

});
function sendRequest(){
	var name=Ext.getCmp("name").getValue();
	Ext.Msg.alert("Name: "+name);
}
