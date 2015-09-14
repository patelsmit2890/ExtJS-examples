function sendRequest(){
	Ext.Ajax.request(
			{
				url:"http://localhost/Ajax/TestServlet",
				params:{
					name:Ext.getCmp("name").getValue(),
					company:Ext.getCmp("company").getValue()
				},
				type:"post",
				success:function(response){
					Ext.getCmp("resp").add({
						xtype:"component",
						html:response.responseText
					});

				}
			});
}

Ext.define("MyForm",{

	extend:"Ext.form.Panel",
	items:[{
		xtype:"textfield",
		id:"name",
		fieldLabel:"Name"
	},{
		xtype:"textfield",
		id:"company",
		fieldLabel:"Company Name"
	},{
		xtype:"button",
		text:"Send Request",
		handler:function(){
			sendRequest();
		}
	},{
		xtype:"panel",
		id:"resp"
	}
	]
});
Ext.onReady(function(){
	Ext.create("MyForm",{
		renderTo:Ext.getBody()
	});

});