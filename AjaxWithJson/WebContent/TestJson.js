function sendRequest(){
	Ext.Ajax.request(
			{
				url:"http://localhost/AjaxWithJson/CustomerServlet",
				params:{
					id:Ext.getCmp("customerId").getValue()
				},
				type:"post",
				success:function(response){
					var customer = Ext.decode(response.responseText);
					var respContent = "<br> Customer Id:"+customer.customerId;
					respContent+= "<br> Customer Name:"+customer.customerName;
					respContent+= "<br> Balance:"+customer.balance;

					var content = Ext.getCmp("content");
					if(content!==null){
						Ext.getCmp("resp").remove(content);
					}
					Ext.getCmp("resp").add({
						xtype:"component",
						html:respContent,
						id:"content"
					});

				}
			});
}

Ext.define("MyForm",{

	extend:"Ext.form.Panel",
	items:[{
		xtype:"textfield",
		id:"customerId",
		fieldLabel:"Customer Id"
	},{
		xtype:"button",
		text:"Get Details",
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