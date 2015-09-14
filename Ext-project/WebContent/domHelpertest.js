Ext.onReady(function(){

	Ext.create("Ext.button.Button",{
	
		text:"Add",
		renderTo:"div1",
		handler:function(){
		var elementToAdd = Ext.DomHelper.createDom({
		tag:"li",
		html:Ext.get("country").getValue()
		});
		
		Ext.get("countriesList").appendChild(elementToAdd);
		}
	}); 
});