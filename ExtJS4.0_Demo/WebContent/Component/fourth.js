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

			Ext.create("Ext.form.field.Date",{
				fieldLabel:"Date of Joining",
				format:"d-M-Y"
			})
			,
			{

//				xtype:"textfield",
				fieldLabel:"Your Age",
				id:"age"
			},
			{
				xtype:"radiogroup",
				columns:2,
				fieldLabel:"Gender",
				items:[
				       {

				    	   xtype:"radio",
				    	   boxLabel:"Female",
				    	   name:"gender"
				       },
				       {

				    	   xtype:"radio",
				    	   boxLabel:"Male",
				    	   name:"gender"
				       }
				       ]
			},
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

					Ext.Ajax.request({
						url:'http://localhost:6060/RestWS/rest/myresttest',
						method: 'GET',
						dataType: 'json',
						// dataType:'applicatio/json',
						success: function(response) {
							console.log('success:',response);
						},
						failure:function(response){
							console.log('failed:',response);
						}
					});
				}
			}],
			renderTo:Ext.getBody()
	});

});
